import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, Download, Calendar, Target, Binary, GitBranch } from 'lucide-react';

const DSARoadmap = () => {
    const [markdownContent, setMarkdownContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const loadRoadmap = async () => {
            try {
                setIsLoading(true);
                // Load from correct path
                const response = await fetch('/documentation/1_Month_DSA_Roadmap.md');
                if (!response.ok) throw new Error('Failed to load roadmap');
                const text = await response.text();
                setMarkdownContent(text);
            } catch (error) {
                console.error('Error loading DSA roadmap:', error);
                // Fallback content
                setMarkdownContent(`# Error Loading DSA Roadmap\n\nPlease ensure the file exists at /roadmaps/1_Month_DSA_Roadmap.md`);
            } finally {
                setIsLoading(false);
            }
        };

        loadRoadmap();
    }, []);

    const parseMarkdownTables = (content) => {
        const lines = content.split('\n');
        const elements = [];
        let currentTable = null;
        let inTable = false;
        let isFirstRowHeader = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmedLine = line.trim();

            // Check if this line starts a table
            if (trimmedLine.includes('|') && !inTable) {
                // Check if the next line is a separator (|---|)
                const nextLine = i + 1 < lines.length ? lines[i + 1].trim() : '';
                const hasSeparator = nextLine.includes('|---') || nextLine.match(/^\|?[-\s:|]+\|?$/);

                if (hasSeparator) {
                    inTable = true;
                    isFirstRowHeader = true;
                    currentTable = {
                        headers: extractTableCells(trimmedLine),
                        rows: []
                    };
                    // Skip to the separator line
                    i++; // Skip the separator line
                    continue;
                } else if (trimmedLine.match(/^\|.*\|$/)) {
                    // Some tables don't have separators but are clearly tables
                    inTable = true;
                    isFirstRowHeader = true;
                    currentTable = {
                        headers: extractTableCells(trimmedLine),
                        rows: []
                    };
                    // Check if this is actually a header or just a row
                    const secondLine = i + 1 < lines.length ? lines[i + 1].trim() : '';
                    if (secondLine.includes('|')) {
                        // This line might be a header, check if next line looks like separator
                        const thirdLine = i + 2 < lines.length ? lines[i + 2].trim() : '';
                        if (!thirdLine.includes('|---')) {
                            // Actually this line is a data row, not a header
                            currentTable = {
                                headers: currentTable.headers.map((_, idx) => `Column ${idx + 1}`),
                                rows: [extractTableCells(trimmedLine)]
                            };
                            isFirstRowHeader = false;
                        }
                    }
                    continue;
                }
            }

            // If we're in a table
            if (inTable) {
                // Skip separator lines
                if (trimmedLine.match(/^\|?[-\s:|]+\|?$/)) {
                    continue;
                }

                // Check if this is a table row
                if (trimmedLine.includes('|')) {
                    const cells = extractTableCells(trimmedLine);
                    if (cells.length > 0) {
                        if (isFirstRowHeader && currentTable.rows.length === 0) {
                            // This is actually the first data row, previous was header
                            currentTable.rows.push(cells);
                        } else if (!isFirstRowHeader && currentTable.headers[0].startsWith('Column')) {
                            // This is a data row for table without proper header
                            currentTable.rows.push(cells);
                        } else {
                            // This is a regular data row
                            currentTable.rows.push(cells);
                        }
                    }
                    continue;
                }

                // End of table - render it
                if (trimmedLine === '' || !trimmedLine.includes('|')) {
                    if (currentTable && (currentTable.headers.length > 0 || currentTable.rows.length > 0)) {
                        elements.push(renderTable(currentTable, `table-${i}`));
                    }
                    currentTable = null;
                    inTable = false;
                    isFirstRowHeader = false;
                }
            }

            // Process non-table content
            if (!inTable) {
                if (trimmedLine.startsWith('# ')) {
                    elements.push(<h1 key={`h1-${i}`} className="text-3xl font-bold text-gray-800 mt-8 mb-6">{trimmedLine.substring(2)}</h1>);
                } else if (trimmedLine.startsWith('## ')) {
                    elements.push(<h2 key={`h2-${i}`} className="text-2xl font-bold text-gray-800 mt-6 mb-4">{trimmedLine.substring(3)}</h2>);
                } else if (trimmedLine.startsWith('### ')) {
                    elements.push(<h3 key={`h3-${i}`} className="text-xl font-semibold text-gray-800 mt-5 mb-3">{trimmedLine.substring(4)}</h3>);
                } else if (trimmedLine.startsWith('---')) {
                    elements.push(<hr key={`hr-${i}`} className="my-6 border-gray-300" />);
                } else if (trimmedLine.startsWith('**')) {
                    // Handle bold text as emphasized paragraph
                    const cleanText = trimmedLine.replace(/\*\*/g, '');
                    elements.push(<p key={`bold-${i}`} className="font-semibold text-gray-800 mb-3">{cleanText}</p>);
                } else if (trimmedLine.match(/^[*-]\s/)) {
                    // Handle bullet points
                    const item = trimmedLine.substring(2);
                    elements.push(
                        <div key={`bullet-${i}`} className="flex items-start mb-2">
                            <span className="text-gray-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{item}</span>
                        </div>
                    );
                } else if (trimmedLine.startsWith('|')) {
                    // Skip table lines that will be processed in table mode
                    continue;
                } else if (trimmedLine !== '') {
                    elements.push(<p key={`p-${i}`} className="text-gray-700 mb-4 leading-relaxed">{trimmedLine}</p>);
                } else {
                    // Empty line for spacing
                    elements.push(<div key={`space-${i}`} className="h-4" />);
                }
            }
        }

        // Render any remaining table
        if (inTable && currentTable) {
            elements.push(renderTable(currentTable, 'table-final'));
        }

        return elements;
    };

    const extractTableCells = (line) => {
        // Remove leading/trailing pipes and split
        const cleanLine = line.replace(/^\||\|$/g, '').trim();
        if (!cleanLine) return [];

        return cleanLine.split('|').map(cell => cell.trim());
    };

    const renderTable = (tableData, key) => {
        // Determine if this is a company table
        const isCompanyTable = tableData.headers &&
            (tableData.headers.includes('Company') ||
                tableData.headers.some(h => h.includes('Company')) ||
                tableData.rows.some(row => row.some(cell => cell.includes('Google') || cell.includes('Amazon'))));

        // Determine if this is a weekly schedule table
        const isWeeklyTable = tableData.headers &&
            tableData.headers.some(h => h.includes('Day') || h.includes('Topic'));

        const renderCellContent = (content) => {
            if (!content) return null;

            // Handle links [text](url)
            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
            const parts = [];
            let lastIndex = 0;
            let match;

            while ((match = linkRegex.exec(content)) !== null) {
                // Add text before link
                if (match.index > lastIndex) {
                    parts.push(content.substring(lastIndex, match.index));
                }

                // Add link
                const [, text, url] = match;
                parts.push(
                    <a
                        key={parts.length}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                        {text}
                    </a>
                );
                lastIndex = match.index + match[0].length;
            }

            // Add remaining text
            if (lastIndex < content.length) {
                const remaining = content.substring(lastIndex);

                // Handle bold text
                const boldParts = remaining.split(/(\*\*.*?\*\*)/g);
                boldParts.forEach((part, idx) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                        parts.push(<strong key={`bold-${parts.length}-${idx}`} className="font-semibold">{part.slice(2, -2)}</strong>);
                    } else if (part) {
                        parts.push(part);
                    }
                });
            }

            return parts.length > 0 ? parts : content;
        };

        // Generate headers if not provided
        const headers = tableData.headers && tableData.headers.length > 0
            ? tableData.headers
            : tableData.rows[0]
                ? tableData.rows[0].map((_, idx) => `Column ${idx + 1}`)
                : [];

        // Use rows starting from index 0 or 1 depending on if headers were in first row
        const rows = tableData.headers && tableData.headers.length > 0
            ? tableData.rows
            : tableData.rows.slice(1);

        return (
            <div key={key} className="my-8 overflow-x-auto border border-gray-200 rounded-lg shadow-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className={isCompanyTable ? 'bg-gray-800' : isWeeklyTable ? 'bg-blue-400' : 'bg-gray-100'}>
                        <tr>
                            {headers.map((header, index) => (
                                <th
                                    key={index}
                                    className={`px-4 py-3 text-left font-semibold ${isCompanyTable
                                        ? 'text-white'
                                        : isWeeklyTable
                                            ? 'text-white'
                                            : 'text-gray-700'
                                        } text-sm uppercase tracking-wider`}
                                >
                                    {renderCellContent(header)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {rows.map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className={`hover:bg-gray-50 ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                            >
                                {row.map((cell, cellIndex) => (
                                    <td
                                        key={cellIndex}
                                        className={`px-4 py-3 text-sm ${isCompanyTable && cellIndex === 0
                                            ? 'font-semibold text-gray-900'
                                            : 'text-gray-700'
                                            }`}
                                    >
                                        <div className="break-words max-w-xs">
                                            {renderCellContent(cell)}
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const renderRoadmap = () => {
        if (isLoading) {
            return (
                <div className="flex justify-center items-center py-20">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading DSA Roadmap...</p>
                    </div>
                </div>
            );
        }

        if (!markdownContent) {
            return (
                <div className="text-center py-16">
                    <p className="text-gray-600 mb-4">Failed to load roadmap content</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Retry Loading
                    </button>
                </div>
            );
        }

        try {
            return parseMarkdownTables(markdownContent);
        } catch (error) {
            console.error('Error rendering roadmap:', error);
            return (
                <div className="text-center py-16">
                    <div className="inline-block p-6 bg-red-50 rounded-lg border border-red-200">
                        <p className="text-red-600 font-semibold mb-2">Error rendering roadmap</p>
                        <p className="text-gray-600 mb-4">{error.message}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }
    };

    const handleDownload = () => {
        const element = document.createElement('a');
        const file = new Blob([markdownContent], { type: 'text/markdown' });
        element.href = URL.createObjectURL(file);
        element.download = '1_Month_DSA_Roadmap.md';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
                {/* Header - Responsive */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-4">
                    <div className="flex items-center">
                        <Link
                            to={location.state?.from || '/'}
                            className="flex items-center px-3 sm:px-4 py-1 sm:py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors mr-3 sm:mr-4 text-sm sm:text-base"
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Back
                        </Link>
                        <div>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">DSA Roadmap</h1>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base">1-Month Intensive Preparation</p>
                        </div>
                    </div>

                    <button
                        onClick={handleDownload}
                        className="flex items-center justify-center px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm text-sm sm:text-base w-full sm:w-auto mt-3 sm:mt-0"
                    >
                        <Download className="w-4 h-4 mr-1 sm:mr-2" />
                        Download Roadmap
                    </button>
                </div>

                {/* Roadmap Content Card - Responsive */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-6 sm:mb-8">
                    <div className="p-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>

                    <div className="p-4 sm:p-6 md:p-8">
                        {/* Title Section - Responsive */}
                        <div className="flex flex-col sm:flex-row items-start mb-6 sm:mb-8">
                            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-3 sm:p-4 rounded-lg sm:rounded-xl mb-4 sm:mb-0 sm:mr-4 flex-shrink-0">
                                <Binary className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">1-Month DSA Roadmap</h1>
                                    <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold rounded-full flex items-center self-start sm:self-center">
                                        <GitBranch className="w-3 h-3 mr-1" />
                                        AI Agent Engineers
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3">
                                    Interview-ready edition focusing on product-based companies and AI system building
                                </p>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500">
                                    <span className="flex items-center">
                                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                        4 Weeks • 2-3 hours/day
                                    </span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="flex items-center">
                                        <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                        Coding Interviews & AI Applications
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Content - Responsive */}
                        <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none overflow-x-auto">
                            {renderRoadmap()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DSARoadmap;