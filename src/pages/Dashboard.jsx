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
  BookOpen,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

// Helper functions for phase styling - matching new semantic colors
const getPhaseColor = (color) => {
  const colors = {
    blue: 'border-blue-500',
    green: 'border-emerald-500',
    purple: 'border-purple-500',
    orange: 'border-orange-500'
  };
  return colors[color] || 'border-blue-500';
};

const getPhaseBgColor = (color) => {
  const colors = {
    blue: 'bg-blue-50',
    green: 'bg-emerald-50',
    purple: 'bg-purple-50',
    orange: 'bg-orange-50'
  };
  return colors[color] || 'bg-blue-50';
};

const getPhaseIconColor = (color) => {
  const colors = {
    blue: 'text-blue-600',
    green: 'text-emerald-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600'
  };
  return colors[color] || 'text-blue-600';
};

const getPhaseProgressColor = (color) => {
  const colors = {
    blue: 'bg-blue-500',
    green: 'bg-emerald-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500'
  };
  return colors[color] || 'bg-blue-600';
};

const getPhaseIcon = (phaseId, color) => {
  const iconClass = `w-6 h-6 ${getPhaseIconColor(color)}`;
  const icons = {
    1: <Code2 className={iconClass} />,
    2: <Image className={iconClass} />,
    3: <Users className={iconClass} />,
    4: <Rocket className={iconClass} />
  };
  return icons[phaseId] || <Brain className={iconClass} />;
};

const Dashboard = () => {
  const { curriculum, progress } = useCurriculum();

  const stats = [
    { label: 'Total Phases', value: curriculum.phases.length, icon: Rocket, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Total Weeks', value: curriculum.phases.reduce((acc, phase) => acc + phase.weeks.length, 0), icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Total Days', value: curriculum.phases.reduce((acc, phase) => acc + phase.weeks.reduce((weekAcc, week) => weekAcc + week.days.length, 0), 0), icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Completion', value: `${progress.overall || 0}%`, icon: Target, color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  const PhaseCard = ({ phase }) => (
    <Link
      to={`/phase/${phase.id}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 overflow-hidden"
    >
      <div className={`p-5 sm:p-6 border-l-4 ${getPhaseColor(phase.color)} h-full flex flex-col`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className={`p-2.5 rounded-xl ${getPhaseBgColor(phase.color)} flex-shrink-0 transition-transform group-hover:scale-110 duration-300`}>
              {getPhaseIcon(phase.id, phase.color)}
            </div>
            <h3 className="text-lg font-bold text-slate-800 truncate group-hover:text-blue-600 transition-colors">{phase.title}</h3>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">{phase.goal}</p>

        <div className="space-y-3 mt-auto">
          <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {phase.duration}</span>
            <span>{phase.weeks.length} weeks</span>
          </div>

          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-50">
                  Progress
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-1 text-xs flex rounded-full bg-slate-100">
              <div
                style={{ width: `${progress.phases?.[phase.id] || 0}%` }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getPhaseProgressColor(phase.color)} transition-all duration-500`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg shadow-blue-900/20">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>

        <div className="relative p-6 sm:p-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-medium mb-4">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-green-400"></span>
              v1.0 Early Access
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              {curriculum.title}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              {curriculum.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/phase/1/week/1/day/1"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg shadow-blue-900/20 active:scale-95"
              >
                Start Learning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-6 py-3 bg-blue-700/50 text-white border border-white/20 rounded-xl font-semibold hover:bg-blue-700 hover:border-white/40 transition-all duration-200 backdrop-blur-sm">
                View Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`bg-white rounded-xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Phases Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center">
            <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
            Learning Phases
          </h2>
          <Link
            to="/documentation"
            className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            View all <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curriculum.phases.map(phase => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
          <Target className="w-5 h-5 text-indigo-500 mr-2" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { to: "/phase/1/week/1/day/1", icon: BookOpen, label: "Continue", color: "text-blue-600", bg: "bg-blue-50" },
            { to: "/documentation", icon: BookOpen, label: "Docs", color: "text-indigo-600", bg: "bg-indigo-50" },
            { to: "/ai-agent-documentation", icon: Code2, label: "AI Agents", color: "text-emerald-600", bg: "bg-emerald-50" },
            { to: "/companies", icon: Image, label: "Companies", color: "text-purple-600", bg: "bg-purple-50" },
            { to: "/dsa-roadmap", icon: Users, label: "DSA", color: "text-orange-600", bg: "bg-orange-50" },
          ].map((action, idx) => (
            <Link
              key={idx}
              to={action.to}
              className="flex flex-col items-center p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-200 group bg-slate-50/50 hover:bg-white"
            >
              <div className={`p-3 rounded-full ${action.bg} mb-3 group-hover:scale-110 transition-transform`}>
                <action.icon className={`w-6 h-6 ${action.color}`} />
              </div>
              <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
