import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Calendar,
  Target,
  Settings,
  ChevronLeft,
  ChevronRight,
  FileText
} from 'lucide-react';
import { useCurriculum } from '../../contexts/CurriculumContext';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const location = useLocation();
  const { curriculum } = useCurriculum();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Curriculum', href: '/phase/1', icon: BookOpen },
    { name: 'Documentation', href: '/documentation', icon: FileText },
    { name: 'Schedule', href: '/schedule', icon: Calendar },
    { name: 'Progress', href: '/progress', icon: Target },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-800">AI Learn</span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-gray-100 rounded-lg"
        >
          {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${isActive(item.href)
                ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Current Phase Progress */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Current Progress</h3>
          <div className="space-y-3">
            {curriculum.phases.map((phase) => (
              <div key={phase.id} className="flex items-center justify-between">
                <span className="text-xs text-gray-600 truncate">{phase.title}</span>
                <div className="w-12 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getPhaseProgressColor(phase.color)}`}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const getPhaseProgressColor = (color) => {
  const colors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600'
  };
  return colors[color] || 'bg-blue-600';
};

export default Sidebar;