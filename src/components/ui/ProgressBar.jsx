// src/components/ui/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ progress, color = 'blue', size = 'md', showLabel = true }) => {
  const sizeClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600'
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${sizeClasses[size]}`}>
        <div
          className={`rounded-full transition-all duration-300 ${colorClasses[color]} ${sizeClasses[size]}`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;