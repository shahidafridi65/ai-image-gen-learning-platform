import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, BookOpen, Download } from 'lucide-react';

const Documentation = () => {
	const [markdownContent, setMarkdownContent] = useState('');
	const location = useLocation();

	useEffect(() => {
		fetch('/documentation/curriculum.md')
			.then(response => response.text())
			.then(text => setMarkdownContent(text))
			.catch(error => console.error('Error loading markdown:', error));
	}, []);

	const parseMarkdownTables = (content) => {
		const lines = content.split('\n');
		const elements = [];
		let currentTable = null;
		let inTable = false;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];

			// Check if this line starts a table
			if (line.includes('|') && !line.includes('---') && !inTable) {
				inTable = true;
				currentTable = {
					headers: line.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim()),
					rows: []
				};
				continue;
			}

			// If we're in a table and encounter a separator line, skip it
			if (inTable && line.includes('---') && line.includes('|')) {
				continue;
			}

			// If we're in a table and encounter another table row
			if (inTable && line.includes('|') && !line.includes('---')) {
				const rowData = line.split('|').filter(cell => cell.trim() !== '').map(cell => cell.trim());
				currentTable.rows.push(rowData);
				continue;
			}

			// If we're in a table and encounter a non-table line, render the table
			if (inTable && !line.includes('|')) {
				elements.push(renderTable(currentTable));
				currentTable = null;
				inTable = false;
			}

			// Handle regular markdown elements
			if (!inTable) {
				if (line.startsWith('# ')) {
					elements.push(<h1 key={i} className="text-3xl font-bold text-gray-800 mt-8 mb-4">{line.substring(2)}</h1>);
				} else if (line.startsWith('## ')) {
					elements.push(<h2 key={i} className="text-2xl font-bold text-gray-800 mt-6 mb-3">{line.substring(3)}</h2>);
				} else if (line.startsWith('### ')) {
					elements.push(<h3 key={i} className="text-xl font-semibold text-gray-800 mt-4 mb-2">{line.substring(4)}</h3>);
				} else if (line.startsWith('---')) {
					elements.push(<hr key={i} className="my-8 border-gray-300" />);
				} else if (line.startsWith('*Goal:')) {
					elements.push(<p key={i} className="text-lg text-gray-700 italic mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">{line}</p>);
				} else if (line.trim() !== '') {
					elements.push(<p key={i} className="text-gray-700 mb-4 leading-relaxed">{line}</p>);
				} else {
					elements.push(<br key={i} />);
				}
			}
		}

		// Don't forget to render the last table if we're still in one
		if (inTable && currentTable) {
			elements.push(renderTable(currentTable));
		}

		return elements;
	};

	const renderTable = (tableData) => {
		const renderCellContent = (content) => {
			// Handle bold text **bold**
			const parts = content.split(/(\*\*.*?\*\*)/g);
			return parts.map((part, index) => {
				if (part.startsWith('**') && part.endsWith('**')) {
					return <strong key={index}>{part.slice(2, -2)}</strong>;
				}
				return part;
			});
		};

		return (
			<div key={`table-${Date.now()}`} className="my-6 overflow-x-auto">
				<table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
					<thead className="bg-gray-50">
						<tr>
							{tableData.headers.map((header, index) => (
								<th
									key={index}
									className="px-4 py-3 text-left font-semibold text-gray-700 border border-gray-300 bg-gray-100"
								>
									{renderCellContent(header)}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{tableData.rows.map((row, rowIndex) => (
							<tr
								key={rowIndex}
								className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}
							>
								{row.map((cell, cellIndex) => (
									<td
										key={cellIndex}
										className="px-4 py-3 text-gray-700 border border-gray-300"
									>
										{renderCellContent(cell)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	};

	const renderMarkdown = (content) => {
		if (!content) return <div className="text-center py-8">Loading documentation...</div>;

		try {
			return parseMarkdownTables(content);
		} catch (error) {
			console.error('Error rendering markdown:', error);
			return <div className="text-red-500">Error rendering documentation content.</div>;
		}
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<div className="max-w-6xl mx-auto p-4 sm:p-6">
				{/* Header - Responsive */}
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
					<Link
						to={location.state?.from || '/'}
						className="flex items-center px-3 sm:px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto"
					>
						<ChevronLeft className="w-4 h-4 mr-1" />
						Back to {location.state?.from === '/dashboard' ? 'Dashboard' : 'Home'}
					</Link>

					<button
						onClick={() => {
							// ... download logic remains the same ...
						}}
						className="flex items-center justify-center px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm text-sm sm:text-base w-full sm:w-auto"
					>
						<Download className="w-4 h-4 mr-2" />
						Download Curriculum
					</button>
				</div>

				{/* Documentation Content - Responsive */}
				<div className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-200 overflow-hidden">
					<div className="p-4 sm:p-6 md:p-8">
						<div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
							<div className="bg-blue-100 p-3 rounded-lg mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
								<BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
							</div>
							<div className="flex-1">
								<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Curriculum Documentation</h1>
								<p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">Complete 14-week learning path for AI-powered virtual try-on</p>
							</div>
						</div>

						<div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
							{renderMarkdown(markdownContent)}
						</div>
					</div>
				</div>

				{/* Quick Navigation - Responsive */}
				<div className="mt-6 sm:mt-8 bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-200 p-4 sm:p-6">
					<h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Quick Navigation</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
						<Link
							to="/phase/1"
							className="p-3 sm:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center border border-blue-200"
						>
							<div className="text-blue-600 font-semibold text-sm sm:text-base">Phase 1</div>
							<div className="text-xs sm:text-sm text-gray-600 mt-1">Foundations</div>
						</Link>
						<Link
							to="/phase/2"
							className="p-3 sm:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center border border-green-200"
						>
							<div className="text-green-600 font-semibold text-sm sm:text-base">Phase 2</div>
							<div className="text-xs sm:text-sm text-gray-600 mt-1">Control & Conditioning</div>
						</Link>
						<Link
							to="/phase/3"
							className="p-3 sm:p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-center border border-purple-200"
						>
							<div className="text-purple-600 font-semibold text-sm sm:text-base">Phase 3</div>
							<div className="text-xs sm:text-sm text-gray-600 mt-1">Identity Preservation</div>
						</Link>
						<Link
							to="/phase/4"
							className="p-3 sm:p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-center border border-orange-200"
						>
							<div className="text-orange-600 font-semibold text-sm sm:text-base">Phase 4</div>
							<div className="text-xs sm:text-sm text-gray-600 mt-1">Deployment</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Documentation;