import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, BookOpen, Download } from 'lucide-react';

const AiAgentDocumentation = () => {
	const [markdownContent, setMarkdownContent] = useState('');
	const location = useLocation();

	useEffect(() => {
		fetch('/documentation/ai-agent-curriculum.md')
			.then(response => response.text())
			.then(text => setMarkdownContent(text))
			.catch(error => console.error('Error loading markdown:', error));
	}, []);

	const parseMarkdownTables = (content) => {
		const lines = content.split('\n');
		const elements = [];
		let currentTable = null;
		let inTable = false;
		let tableStartIndex = -1;
		let separatorLineFound = false;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();
			const rawLine = lines[i];

			// Check if this line starts a table (has pipe characters and looks like a table row)
			const hasPipe = line.includes('|');
			const isSeparatorLine = line.includes('---') && line.includes('|');
			const isEmptyLine = line === '';

			// Detect start of table
			if (hasPipe && !isSeparatorLine && !inTable) {
				// Check if this could be a table header by looking ahead
				if (i + 1 < lines.length && lines[i + 1].trim().includes('|---')) {
					inTable = true;
					tableStartIndex = i;
					currentTable = {
						headers: line.split('|')
							.filter(cell => cell.trim() !== '')
							.map(cell => cell.trim()),
						rows: []
					};
					continue;
				}
			}

			// If we're in a table
			if (inTable) {
				// Check for separator line (|---|----|---|)
				if (isSeparatorLine) {
					separatorLineFound = true;
					continue;
				}

				// If we have a separator line found and this is a data row
				if (separatorLineFound && hasPipe && !isSeparatorLine) {
					const cells = rawLine.split('|')
						.filter(cell => cell.trim() !== '')
						.map(cell => cell.trim());

					// Only add row if it has the same number of columns as headers (or close)
					if (cells.length >= currentTable.headers.length - 1 && cells.length <= currentTable.headers.length + 1) {
						currentTable.rows.push(cells);
					}
					continue;
				}

				// End of table conditions
				if (isEmptyLine || !hasPipe) {
					// We need at least a header and some rows to render a valid table
					if (currentTable && currentTable.headers.length > 0 && currentTable.rows.length > 0) {
						elements.push(renderTable(currentTable, `table-${tableStartIndex}`));
					}

					// Reset table state
					currentTable = null;
					inTable = false;
					separatorLineFound = false;
					tableStartIndex = -1;
				}
			}

			// Handle regular markdown elements (only if not in table)
			if (!inTable && !isEmptyLine) {
				if (rawLine.startsWith('# ')) {
					elements.push(<h1 key={`h1-${i}`} className="text-3xl font-bold text-gray-800 mt-8 mb-4">{rawLine.substring(2)}</h1>);
				} else if (rawLine.startsWith('## ')) {
					elements.push(<h2 key={`h2-${i}`} className="text-2xl font-bold text-gray-800 mt-6 mb-3">{rawLine.substring(3)}</h2>);
				} else if (rawLine.startsWith('### ')) {
					elements.push(<h3 key={`h3-${i}`} className="text-xl font-semibold text-gray-800 mt-4 mb-2">{rawLine.substring(4)}</h3>);
				} else if (rawLine.startsWith('---')) {
					elements.push(<hr key={`hr-${i}`} className="my-8 border-gray-300" />);
				} else if (rawLine.startsWith('*Goal:')) {
					elements.push(<p key={`goal-${i}`} className="text-lg text-gray-700 italic mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">{rawLine}</p>);
				} else if (rawLine.includes('**Phase') && rawLine.includes('**')) {
					elements.push(<h2 key={`phase-${i}`} className="text-2xl font-bold text-blue-700 mt-8 mb-4 p-3 bg-blue-50 rounded-lg">{rawLine.replace(/\*\*/g, '')}</h2>);
				} else if (rawLine.startsWith('|') && rawLine.includes('---') && rawLine.includes('|')) {
					// Skip separator lines that appear outside table context
					continue;
				} else {
					elements.push(<p key={`p-${i}`} className="text-gray-700 mb-4 leading-relaxed">{rawLine}</p>);
				}
			} else if (!inTable && isEmptyLine) {
				// Add empty line spacing
				elements.push(<div key={`space-${i}`} className="h-4" />);
			}
		}

		// Don't forget to render the last table if we're still in one
		if (inTable && currentTable && currentTable.headers.length > 0) {
			elements.push(renderTable(currentTable, `table-${tableStartIndex}`));
		}

		return elements;
	};

	const renderTable = (tableData, key) => {
		const renderCellContent = (content) => {
			if (!content) return null;

			// Handle bold text **bold**
			const parts = content.split(/(\*\*.*?\*\*)/g);
			return parts.map((part, index) => {
				if (part.startsWith('**') && part.endsWith('**')) {
					return <strong key={index} className="font-semibold text-gray-800">{part.slice(2, -2)}</strong>;
				}
				return part;
			});
		};

		// Ensure we have valid data
		if (!tableData.headers || tableData.headers.length === 0) {
			return null;
		}

		return (
			<div key={key} className="my-6 overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
				<table className="w-full border-collapse bg-white">
					<thead className="bg-gray-50">
						<tr>
							{tableData.headers.map((header, index) => (
								<th
									key={index}
									className="px-4 py-3 text-left font-semibold text-gray-700 border-b border-gray-200"
								>
									{renderCellContent(header)}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{tableData.rows.map((row, rowIndex) => {
							// Handle missing cells in rows
							const paddedRow = [...row];
							while (paddedRow.length < tableData.headers.length) {
								paddedRow.push('');
							}

							return (
								<tr
									key={rowIndex}
									className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50 hover:bg-gray-100'}
								>
									{paddedRow.slice(0, tableData.headers.length).map((cell, cellIndex) => (
										<td
											key={cellIndex}
											className="px-4 py-3 text-gray-700 border-b border-gray-200"
										>
											{renderCellContent(cell)}
										</td>
									))}
								</tr>
							);
						})}
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
			return <div className="text-red-500 p-4 bg-red-50 rounded-lg">Error rendering documentation content: {error.message}</div>;
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
								<h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">AI Agent Developer Curriculum</h1>
								<p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base md:text-lg">40-Week Comprehensive Learning Path: ML Engineer → LLM Engineer → AI Agent Developer</p>
							</div>
						</div>

						<div className="border-t border-gray-200 pt-4 sm:pt-6">
							<div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none overflow-x-auto">
								{renderMarkdown(markdownContent)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AiAgentDocumentation;