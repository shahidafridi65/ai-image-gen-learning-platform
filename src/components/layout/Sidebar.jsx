import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Calendar,
  Target,
  Settings,
  ChevronLeft,
  ChevronRight,
  FileText,
  Globe,
  BinaryIcon,
  Menu,
  X
} from 'lucide-react';
import { useCurriculum } from '../../contexts/CurriculumContext';

const Sidebar = ({ isMobileOpen, setIsMobileOpen, isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const { curriculum } = useCurriculum();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Curriculum', href: '/phase/1', icon: BookOpen },
    { name: 'AI Image Documentation', href: '/documentation', icon: FileText },
    { name: 'AI Agent Docs', href: '/ai-agent-documentation', icon: FileText },
    { name: 'DSA Roadmap', href: '/dsa-roadmap', icon: BinaryIcon },
    { name: 'Companies', href: '/companies', icon: Globe },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  // Close mobile sidebar when clicking on a link
  useEffect(() => {
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  }, [location.pathname, setIsMobileOpen]);

  // Close sidebar on mobile when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobileOpen]);

  return (
    <>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          flex-shrink-0
          fixed md:relative
          top-0 left-0 h-full
          bg-white border-r border-slate-200
          transition-all duration-300 ease-in-out
          z-40 shadow-xl md:shadow-none
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
          ${isCollapsed ? 'w-20' : 'w-72 md:w-64'}
        `}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 h-16 border-b border-slate-100">
          {!isCollapsed && (
            <div className="flex items-center space-x-2 animate-fade-in px-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-soft flex-shrink-0"></div>
              <span className="text-lg font-bold text-slate-800 truncate">AI Learn</span>
            </div>
          )}

          {/* Collapse Button - Hidden on mobile */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`hidden md:flex p-1.5 hover:bg-slate-100 text-slate-500 hover:text-slate-900 rounded-lg transition-colors ${isCollapsed ? 'mx-auto' : ''}`}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>

          {/* Close Button - Mobile only */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-2 hover:bg-slate-100 text-slate-500 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center px-3 py-2.5 rounded-xl transition-all duration-200 group
                  ${active
                    ? 'bg-blue-50 text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }
                  ${isCollapsed ? 'justify-center' : ''}
                `}
                title={isCollapsed ? item.name : ''}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 transition-colors ${active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                {!isCollapsed && (
                  <span className="ml-3 font-medium truncate text-sm">{item.name}</span>
                )}
                {/* Active Indicator Strip */}
                {active && !isCollapsed && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Current Phase Progress - Only show when not collapsed */}
        {!isCollapsed && (
          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-slate-100 bg-slate-50/50">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-1">Curriculum Status</h3>
            <div className="space-y-3">
              {curriculum.phases.slice(0, 3).map((phase) => (
                <div key={phase.id} className="group">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-slate-600 truncate group-hover:text-blue-600 transition-colors">{phase.title}</span>
                    <span className="text-[10px] text-slate-400">0%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${getPhaseProgressColor(phase.color)} opacity-80 group-hover:opacity-100 transition-opacity`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show more indicator if there are more phases */}
            {curriculum.phases.length > 3 && (
              <button className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-3 w-full text-left flex items-center hover:underline">
                View all phases
                <ChevronRight className="w-3 h-3 ml-1" />
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const getPhaseProgressColor = (color) => {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-emerald-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };
  return colors[color] || 'bg-blue-500';
};

export default Sidebar;
