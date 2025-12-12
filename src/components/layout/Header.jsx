// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { Bell, Search, User, Menu, X } from 'lucide-react';

const Header = ({ onToggleSidebar, isMobileMenuOpen }) => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    return (
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
            <div className="flex items-center justify-between px-4 sm:px-6 py-3">
                {/* Logo and Menu Button - Only on Mobile */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                    {/* Mobile Menu Button - Only shows on mobile */}
                    <div className="md:hidden flex-shrink-0">
                        <button
                            onClick={onToggleSidebar}
                            className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                            aria-label="Toggle Sidebar"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                    
                    {/* Logo - Shows on all screens */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex-shrink-0"></div>
                        <span className="text-lg sm:text-xl font-bold text-gray-800 hidden sm:block">AI Learn</span>
                        <span className="text-lg font-bold text-gray-800 sm:hidden">AL</span>
                    </div>
                </div>

                {/* Search Bar - Desktop */}
                <div className="hidden md:flex flex-1 max-w-lg mx-8">
                    <div className="relative w-full group">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors duration-200" />
                        <input
                            type="text"
                            placeholder="Search curriculum..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 text-sm"
                        />
                    </div>
                </div>

                {/* User Menu */}
                <div className="flex items-center space-x-2 sm:space-x-3">
                    {/* Search Button - Mobile */}
                    <button
                        onClick={() => setIsSearchVisible(!isSearchVisible)}
                        className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                        <Search className="w-5 h-5" />
                    </button>

                    {/* Notifications */}
                    <button className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white ring-1 ring-red-500/20"></span>
                    </button>

                    <div className="h-6 w-px bg-slate-200 mx-2 hidden sm:block"></div>

                    {/* User Profile */}
                    <button className="flex items-center space-x-2 sm:space-x-3 hover:bg-slate-50 p-1.5 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-tr from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-soft text-white font-medium text-sm">
                            SL
                        </div>
                        <span className="text-sm font-medium text-slate-700 hidden sm:block">Shahid Learnings</span>
                    </button>
                </div>
            </div>

            {/* Mobile Search Bar - Toggle */}
            {isSearchVisible && (
                <div className="md:hidden px-4 pb-4 animate-fade-in border-b border-slate-100">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search curriculum..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                            autoFocus
                        />
                    </div>
                </div>
            )}

            {/* Mobile Navigation Menu - Only shows when mobile menu is open */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg animate-fade-in-up z-40">
                    <div className="px-4 py-3 space-y-1">
                        <a href="/" className="block px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium">
                            Dashboard
                        </a>
                        <a href="/phase/1" className="block px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium">
                            Curriculum
                        </a>
                        <a href="/documentation" className="block px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium">
                            AI Image Docs
                        </a>
                        <a href="/ai-agent-documentation" className="block px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium">
                            AI Agent Docs
                        </a>
                        <a href="/dsa-roadmap" className="block px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium">
                            DSA Roadmap
                        </a>
                        <a href="/companies" className="block px-4 py-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors font-medium">
                            Companies
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;