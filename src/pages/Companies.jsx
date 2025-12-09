import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, BookOpen, Download, Globe, Flag, Search, Filter } from 'lucide-react';

const Companies = () => {
	const [markdownContent, setMarkdownContent] = useState('');
	const [activeTab, setActiveTab] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedFilters, setSelectedFilters] = useState({
		remoteType: '',
		headquarters: '',
	});
	const [allTablesData, setAllTablesData] = useState([]);
	const [parsedTables, setParsedTables] = useState([]);
	const [availableFilters, setAvailableFilters] = useState({
		headquarters: new Set(),
		remoteTypes: new Set(),
	});

	// Define markdown file paths
	const markdownFiles = {
		all: '/documentation/complete_product_companies_list.md',
		indian: '/documentation/indian_product_companies_fullstack_ai_ml.md',
		startups: '/documentation/companies_3_4years.md'
	};

	// Tab configuration
	const tabs = [
		{ id: 'all', label: 'All Product Based Companies', icon: Globe },
		{ id: 'indian', label: 'Indian Product Companies', icon: Flag },
		{ id: 'startups', label: 'Startup Companies', icon: Filter }
	];

	// Parse markdown and extract table data
	const parseMarkdownToTables = useCallback((content, tabId) => {
		const lines = content.split('\n');
		const tables = [];
		const filters = {
			headquarters: new Set(),
			remoteTypes: new Set(),
		};
		let currentTable = null;
		let inTable = false;
		let separatorLineFound = false;
		let tableStartIndex = -1;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();
			const rawLine = lines[i];

			const hasPipe = line.includes('|');
			const isSeparatorLine = line.includes('---') && line.includes('|');
			const isEmptyLine = line === '';

			// Detect start of table
			if (hasPipe && !isSeparatorLine && !inTable) {
				if (i + 1 < lines.length && lines[i + 1].trim().includes('|---')) {
					inTable = true;
					tableStartIndex = i;
					currentTable = {
						headers: line.split('|')
							.filter(cell => cell.trim() !== '')
							.map(cell => cell.trim().replace(/\*\*/g, '')),
						rows: [],
						originalIndex: tableStartIndex,
						sectionTitle: getSectionTitle(lines, i),
					};
					continue;
				}
			}

			// If we're in a table
			if (inTable) {
				if (isSeparatorLine) {
					separatorLineFound = true;
					continue;
				}

				if (separatorLineFound && hasPipe && !isSeparatorLine) {
					const cells = rawLine.split('|')
						.filter(cell => cell.trim() !== '')
						.map(cell => cell.trim().replace(/\*\*/g, ''));
					
					if (cells.length > 0) {
						currentTable.rows.push(cells);
						
						// Extract filter values based on headers and tab type
						const headers = currentTable.headers.map(h => h.toLowerCase());
						
						cells.forEach((cell, idx) => {
							const header = headers[idx];
							if (!header || !cell) return;
							
							// Extract headquarters
							if (header.includes('headquarter') || header.includes('headquarters') || 
								header.includes('hq') || header.includes('location') || 
								header.includes('city') || header === 'hq') {
								filters.headquarters.add(cell);
							}
							
							// Extract remote types - different patterns for different tabs
							if (tabId === 'all') {
								// For "All Product Based Companies"
								if (header.includes('remote')) {
									if (cell === 'TRUE' || cell === 'FALSE' || cell === 'PARTIAL' || 
										cell === 'YES' || cell === 'NO') {
										filters.remoteTypes.add(cell);
									}
								}
							} else if (tabId === 'indian') {
								// For "Indian Product Companies"
								if (header.includes('remote') || header.includes('hybrid')) {
									// Handle HYBRID, ONSITE, REMOTE values
									if (cell === 'HYBRID' || cell === 'ONSITE' || cell === 'REMOTE' || 
										cell.includes('HYBRID') || cell.includes('ONSITE') || cell.includes('REMOTE')) {
										filters.remoteTypes.add(cell);
									}
								}
							} else if (tabId === 'startups') {
								// For "Startup Companies"
								if (header.includes('remote') || header.includes('mode') || 
									header.includes('work') || header.includes('location')) {
									// Handle REMOTE, HYBRID, ONSITE values
									if (cell === 'REMOTE' || cell === 'HYBRID' || cell === 'ONSITE' ||
										cell.includes('REMOTE') || cell.includes('HYBRID') || cell.includes('ONSITE')) {
										filters.remoteTypes.add(cell);
									}
								}
							}
						});
					}
					continue;
				}

				// End of table conditions
				if (isEmptyLine || !hasPipe) {
					if (currentTable && currentTable.headers.length > 0 && currentTable.rows.length > 0) {
						tables.push({...currentTable});
					}
					
					currentTable = null;
					inTable = false;
					separatorLineFound = false;
					tableStartIndex = -1;
				}
			}
		}

		// Last table
		if (inTable && currentTable && currentTable.headers.length > 0) {
			tables.push({...currentTable});
		}

		return { tables, filters };
	}, []);

	const getSectionTitle = (lines, currentIndex) => {
		// Look backwards for the nearest heading
		for (let i = currentIndex - 1; i >= 0; i--) {
			const line = lines[i].trim();
			if (line.startsWith('# ') || line.startsWith('## ') || line.startsWith('### ')) {
				return line.replace(/^#+\s*/, '');
			}
		}
		return '';
	};

	// Filter tables based on search and filters
	const filterTables = useCallback((tables) => {
		if (!searchQuery && !selectedFilters.remoteType && !selectedFilters.headquarters) {
			return tables;
		}

		return tables.map(table => {
			const filteredRows = table.rows.filter(row => {
				// Combine all cell values for global search
				const rowText = row.join(' ').toLowerCase();
				
				// Check global search
				if (searchQuery) {
					const searchLower = searchQuery.toLowerCase();
					if (!rowText.includes(searchLower)) {
						return false;
					}
				}

				// Check field-specific filters
				const headers = table.headers.map(h => h.toLowerCase());
				
				// Remote filter
				if (selectedFilters.remoteType) {
					let remoteIndex = -1;
					
					// Try different header patterns for remote column
					const remoteHeaders = ['remote', 'hybrid', 'remote/hybrid', 'work mode', 'location'];
					for (const header of remoteHeaders) {
						const idx = headers.findIndex(h => h.includes(header));
						if (idx !== -1) {
							remoteIndex = idx;
							break;
						}
					}
					
					if (remoteIndex !== -1) {
						const cellValue = row[remoteIndex] || '';
						if (!cellValue.includes(selectedFilters.remoteType)) {
							return false;
						}
					}
				}

				// Headquarters filter
				if (selectedFilters.headquarters) {
					let hqIndex = -1;
					
					// Try different header patterns for headquarters
					const hqHeaders = ['headquarter', 'headquarters', 'hq', 'location', 'city', 'head office'];
					for (const header of hqHeaders) {
						const idx = headers.findIndex(h => h.includes(header));
						if (idx !== -1) {
							hqIndex = idx;
							break;
						}
					}
					
					if (hqIndex !== -1) {
						const cellValue = row[hqIndex] || '';
						if (!cellValue.toLowerCase().includes(selectedFilters.headquarters.toLowerCase())) {
							return false;
						}
					}
				}

				return true;
			});

			return {
				...table,
				rows: filteredRows
			};
		}).filter(table => table.rows.length > 0);
	}, [searchQuery, selectedFilters]);

	// Load markdown based on active tab
	useEffect(() => {
		const loadMarkdown = async () => {
			try {
				const response = await fetch(markdownFiles[activeTab]);
				if (!response.ok) throw new Error(`Failed to load ${activeTab} markdown`);
				const text = await response.text();
				setMarkdownContent(text);
				
				// Reset filters when tab changes
				setSelectedFilters({
					remoteType: '',
					headquarters: '',
				});
				
				// Parse tables with tab-specific logic
				const { tables, filters } = parseMarkdownToTables(text, activeTab);
				setAllTablesData(tables);
				
				// Normalize remote types for better display
				const normalizedRemoteTypes = new Set();
				Array.from(filters.remoteTypes).forEach(type => {
					if (type) {
						// Normalize common remote types
						if (type.includes('TRUE')) normalizedRemoteTypes.add('TRUE');
						else if (type.includes('FALSE')) normalizedRemoteTypes.add('FALSE');
						else if (type.includes('PARTIAL')) normalizedRemoteTypes.add('PARTIAL');
						else if (type.includes('YES')) normalizedRemoteTypes.add('YES');
						else if (type.includes('NO')) normalizedRemoteTypes.add('NO');
						else if (type.includes('REMOTE')) normalizedRemoteTypes.add('REMOTE');
						else if (type.includes('HYBRID')) normalizedRemoteTypes.add('HYBRID');
						else if (type.includes('ONSITE')) normalizedRemoteTypes.add('ONSITE');
						else normalizedRemoteTypes.add(type);
					}
				});
				
				setAvailableFilters({
					headquarters: filters.headquarters,
					remoteTypes: normalizedRemoteTypes,
				});
			} catch (error) {
				console.error('Error loading markdown:', error);
				setMarkdownContent(`# Error\n\nFailed to load ${activeTab} list.`);
				setAllTablesData([]);
				setAvailableFilters({
					headquarters: new Set(),
					remoteTypes: new Set(),
				});
			}
		};

		loadMarkdown();
	}, [activeTab, parseMarkdownToTables]);

	// Update parsed tables when filters change
	useEffect(() => {
		if (allTablesData.length > 0) {
			const filteredTables = filterTables(allTablesData);
			const elements = renderTables(filteredTables);
			setParsedTables(elements);
		} else {
			// If no table data, render raw markdown
			const elements = renderMarkdownContent(markdownContent);
			setParsedTables(elements);
		}
	}, [allTablesData, filterTables, markdownContent]);

	// Render tables to JSX
	const renderTables = (tables) => {
		if (tables.length === 0 && !searchQuery && !selectedFilters.remoteType && !selectedFilters.headquarters) {
			// No tables found in the document
			return renderMarkdownContent(markdownContent);
		}

		if (tables.length === 0) {
			return (
				<div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
					<Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
					<h3 className="text-lg font-semibold text-gray-700 mb-2">No companies found</h3>
					<p className="text-gray-500">Try adjusting your search or filters</p>
				</div>
			);
		}

		return tables.map((table, tableIndex) => {
			if (table.rows.length === 0) return null;

			return (
				<div key={`table-${table.originalIndex}-${tableIndex}`} className="mb-10">
					{table.sectionTitle && (
						<h3 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
							{table.sectionTitle}
						</h3>
					)}
					<div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
						<table className="w-full border-collapse bg-white">
							<thead className="bg-gray-50">
								<tr>
									{table.headers.map((header, index) => (
										<th
											key={index}
											className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200 whitespace-nowrap"
										>
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{table.rows.map((row, rowIndex) => (
									<tr
										key={rowIndex}
										className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}
									>
										{row.map((cell, cellIndex) => (
											<td
												key={cellIndex}
												className="px-4 py-3 text-gray-700 border-b border-gray-200"
											>
												{cell}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="mt-2 text-sm text-gray-500">
						Showing {table.rows.length} companies
					</div>
				</div>
			);
		});
	};

	const renderMarkdownContent = (content) => {
		if (!content) return <div className="text-center py-8">Loading companies list...</div>;

		const lines = content.split('\n');
		const elements = [];

		for (let i = 0; i < lines.length; i++) {
			const rawLine = lines[i];
			const line = rawLine.trim();

			if (line.startsWith('# ')) {
				elements.push(<h1 key={`h1-${i}`} className="text-3xl font-bold text-gray-800 mt-8 mb-4">{rawLine.substring(2)}</h1>);
			} else if (line.startsWith('## ')) {
				elements.push(<h2 key={`h2-${i}`} className="text-2xl font-bold text-gray-800 mt-6 mb-3">{rawLine.substring(3)}</h2>);
			} else if (line.startsWith('### ')) {
				elements.push(<h3 key={`h3-${i}`} className="text-xl font-semibold text-gray-800 mt-4 mb-2">{rawLine.substring(4)}</h3>);
			} else if (line.startsWith('---')) {
				elements.push(<hr key={`hr-${i}`} className="my-8 border-gray-300" />);
			} else if (line === '') {
				elements.push(<div key={`space-${i}`} className="h-4" />);
			} else if (!line.includes('|') || !line.includes('|---')) {
				elements.push(<p key={`p-${i}`} className="text-gray-700 mb-4 leading-relaxed">{rawLine}</p>);
			}
		}

		return elements;
	};

	const handleDownload = () => {
		const fileName = activeTab === 'all' 
			? 'complete_product_companies_list.md' 
			: activeTab === 'indian'
			? 'indian_product_companies_fullstack_ai_ml.md'
			: 'companies_3_4years.md';
		
		const element = document.createElement('a');
		const file = new Blob([markdownContent], { type: 'text/markdown' });
		element.href = URL.createObjectURL(file);
		element.download = fileName;
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	};

	const handleFilterChange = (key, value) => {
		setSelectedFilters(prev => ({
			...prev,
			[key]: value
		}));
	};

	const clearFilters = () => {
		setSearchQuery('');
		setSelectedFilters({
			remoteType: '',
			headquarters: '',
		});
	};

	const hasActiveFilters = searchQuery || selectedFilters.remoteType || selectedFilters.headquarters;

	// Sort remote types for better display
	const sortedRemoteTypes = Array.from(availableFilters.remoteTypes).sort((a, b) => {
		const order = ['REMOTE', 'HYBRID', 'ONSITE', 'TRUE', 'FALSE', 'PARTIAL', 'YES', 'NO'];
		return order.indexOf(a) - order.indexOf(b);
	});

	// Sort headquarters for better display
	const sortedHeadquarters = Array.from(availableFilters.headquarters).sort();

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-6xl mx-auto p-6">
				{/* Header */}
				<div className="flex items-center justify-between mb-8">
					<Link
						to={location.state?.from || '/'}
						className="flex items-center px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
					>
						<ChevronLeft className="w-4 h-4 mr-1" />
						Back to {location.state?.from === '/dashboard' ? 'Dashboard' : 'Home'}
					</Link>

					<button
						onClick={handleDownload}
						className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
					>
						<Download className="w-4 h-4 mr-2" />
						Download List
					</button>
				</div>

				{/* Companies Content */}
				<div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
					{/* Tab Navigation */}
					<div className="border-b border-gray-200">
						<div className="flex space-x-1 p-4">
							{tabs.map((tab) => {
								const Icon = tab.icon;
								const isActive = activeTab === tab.id;
								
								return (
									<button
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={`
											flex items-center px-4 py-3 rounded-lg transition-all duration-200
											${isActive 
												? 'bg-blue-50 text-blue-700 border border-blue-200' 
												: 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
											}
										`}
									>
										<Icon className="w-4 h-4 mr-2" />
										<span className="font-medium">{tab.label}</span>
									</button>
								);
							})}
						</div>
					</div>

					<div className="p-8">
						<div className="flex items-center mb-8">
							<div className="bg-blue-100 p-3 rounded-lg mr-4">
								<BookOpen className="w-8 h-8 text-blue-600" />
							</div>
							<div>
								<h1 className="text-3xl font-bold text-gray-800">
									{activeTab === 'all' ? 'Complete Product Companies List' : 
									 activeTab === 'indian' ? 'Indian Product Companies - Full Stack AI/ML' : 
									 'Startup Companies (Below 3 Years + 3-4 Years)'}
								</h1>
								<p className="text-lg text-gray-600 mt-2">
									{activeTab === 'all' 
										? 'Comprehensive list of product-based companies worldwide' 
										: activeTab === 'indian'
										? 'Curated list of Indian product companies working in AI/ML domain'
										: 'Startup companies actively hiring for Full Stack, React JS, and Software Engineer roles'
									}
								</p>
							</div>
						</div>

						{/* Search and Filter Section */}
						<div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
							<div className="flex flex-col md:flex-row gap-4 mb-4">
								{/* Search Input */}
								<div className="flex-1">
									<div className="relative">
										<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
										<input
											type="text"
											placeholder="Search companies..."
											value={searchQuery}
											onChange={(e) => setSearchQuery(e.target.value)}
											className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										/>
									</div>
								</div>
							</div>

							{/* Filter Controls */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{/* Remote Policy Filter */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Remote Policy
									</label>
									<select
										value={selectedFilters.remoteType}
										onChange={(e) => handleFilterChange('remoteType', e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									>
										<option value="">All Remote Types</option>
										{sortedRemoteTypes.map(type => (
											<option key={type} value={type}>
												{type === 'TRUE' ? 'Remote (TRUE)' : 
												 type === 'FALSE' ? 'Remote (FALSE)' : 
												 type === 'PARTIAL' ? 'Remote (PARTIAL)' : 
												 type === 'YES' ? 'AI/ML Hiring (YES)' : 
												 type === 'NO' ? 'AI/ML Hiring (NO)' : type}
											</option>
										))}
									</select>
								</div>

								{/* Headquarters Filter */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Headquarters
									</label>
									<select
										value={selectedFilters.headquarters}
										onChange={(e) => handleFilterChange('headquarters', e.target.value)}
										className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
									>
										<option value="">All Locations</option>
										{sortedHeadquarters.map(hq => (
											<option key={hq} value={hq}>{hq}</option>
										))}
									</select>
								</div>
							</div>

							{/* Active Filters Indicator */}
							{hasActiveFilters && (
								<div className="mt-4 flex items-center justify-between">
									<div className="text-sm text-gray-600 flex flex-wrap gap-2">
										{searchQuery && <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Search: "{searchQuery}"</span>}
										{selectedFilters.remoteType && <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Remote: {selectedFilters.remoteType}</span>}
										{selectedFilters.headquarters && <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">HQ: {selectedFilters.headquarters}</span>}
									</div>
									<button
										onClick={clearFilters}
										className="text-sm text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded-lg transition-colors"
									>
										Clear all filters
									</button>
								</div>
							)}
						</div>

						<div className="border-t border-gray-200 pt-6">
							{parsedTables.length > 0 ? parsedTables : renderMarkdownContent(markdownContent)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Companies;