// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCurriculum } from '../contexts/CurriculumContext';
import {
  Brain,
  Code2,
  Image,
  Users,
  Rocket,
  Calendar,
  Target,
  BookOpen
} from 'lucide-react';

// Helper functions for phase styling
const getPhaseColor = (color) => {
  const colors = {
    blue: 'border-blue-500',
    green: 'border-green-500',
    purple: 'border-purple-500',
    orange: 'border-orange-500'
  };
  return colors[color] || 'border-blue-500';
};

const getPhaseBgColor = (color) => {
  const colors = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50',
    orange: 'bg-orange-50'
  };
  return colors[color] || 'bg-blue-50';
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

const getPhaseIcon = (phaseId) => {
  const icons = {
    1: <Code2 className="w-6 h-6 text-blue-600" />,
    2: <Image className="w-6 h-6 text-green-600" />,
    3: <Users className="w-6 h-6 text-purple-600" />,
    4: <Rocket className="w-6 h-6 text-orange-600" />
  };
  return icons[phaseId] || <Brain className="w-6 h-6 text-gray-600" />;
};

const Dashboard = () => {
  const { curriculum, progress } = useCurriculum();

  const stats = [
    { label: 'Total Phases', value: curriculum.phases.length, icon: Rocket },
    { label: 'Total Weeks', value: curriculum.phases.reduce((acc, phase) => acc + phase.weeks.length, 0), icon: Calendar },
    { label: 'Total Days', value: curriculum.phases.reduce((acc, phase) => acc + phase.weeks.reduce((weekAcc, week) => weekAcc + week.days.length, 0), 0), icon: BookOpen },
    { label: 'Completion', value: `${progress.overall || 0}%`, icon: Target }
  ];

  const PhaseCard = ({ phase }) => (
    <Link
      to={`/phase/${phase.id}`}
      className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
    >
      <div className={`p-6 border-l-4 ${getPhaseColor(phase.color)}`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">{phase.title}</h3>
          <div className={`p-2 rounded-lg ${getPhaseBgColor(phase.color)}`}>
            {getPhaseIcon(phase.id)}
          </div>
        </div>
        <p className="text-gray-600 mb-3">{phase.goal}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{phase.duration}</span>
          <span>{phase.weeks.length} weeks</span>
        </div>
        <div className="mt-4 bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${getPhaseProgressColor(phase.color)}`}
            style={{ width: `${progress.phases?.[phase.id] || 0}%` }}
          ></div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{curriculum.title}</h1>
          <p className="text-xl text-blue-100 mb-6">{curriculum.description}</p>
          <div className="flex gap-4">
            <Link
              to="/phase/1/week/1/day/1"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Learning
            </Link>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
              View Curriculum
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Phases Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Phases</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {curriculum.phases.map(phase => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/phase/1/week/1/day/1"
            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium">Continue Learning</span>
          </Link>

          <Link
            to="/documentation"
            className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <BookOpen className="w-8 h-8 text-indigo-600 mb-2" />
            <span className="text-sm font-medium">Documentation</span>
          </Link>
          <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors">
            <Code2 className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium">Code Examples</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
            <Image className="w-8 h-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium">Projects</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
            <Users className="w-8 h-8 text-orange-600 mb-2" />
            <span className="text-sm font-medium">Community</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;