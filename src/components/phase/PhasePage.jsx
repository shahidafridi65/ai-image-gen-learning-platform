// src/components/phase/PhasePage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { ChevronLeft, Calendar, Target, BookOpen, Clock, Activity } from 'lucide-react';

const PhasePage = () => {
  const { phaseId } = useParams();
  const { getPhase, progress } = useCurriculum();

  const phase = getPhase(parseInt(phaseId));

  if (!phase) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Phase Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const WeekCard = ({ week }) => (
    <Link
      to={`/phase/${phase.id}/week/${week.id}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 p-6 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{week.title}</h3>
        <div className="flex items-center space-x-2 text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-full">
          <Calendar className="w-3.5 h-3.5" />
          <span>{week.days.length} days</span>
        </div>
      </div>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">{week.description}</p>
      <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-100">
        <span className="text-slate-500 font-medium">Progress: 0%</span>
        <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform flex items-center">
          Start Learning <ChevronLeft className="w-4 h-4 rotate-180 ml-1" />
        </span>
      </div>
    </Link>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Navigation */}
      <Link
        to="/"
        className="inline-flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors mb-2"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Dashboard
      </Link>

      {/* Phase Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>

        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-3">
                Phase {phase.id}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">{phase.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{phase.goal}</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 min-w-[160px] border border-slate-100">
              <div className="text-sm font-medium text-slate-500 mb-2">Overall Progress</div>
              <div className="flex items-end items-baseline">
                <span className="text-3xl font-bold text-blue-600">{progress.phases?.[phase.id] || 0}</span>
                <span className="text-lg text-slate-400 font-medium">%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3 overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress.phases?.[phase.id] || 0}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-4">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Duration</div>
                <div className="font-bold text-slate-800">{phase.duration}</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg mr-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Content</div>
                <div className="font-bold text-slate-800">{phase.weeks.length} Weeks</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-purple-50/50 rounded-xl border border-purple-100/50">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-4">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Status</div>
                <div className="font-bold text-slate-800">In Progress</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weeks Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Weekly Curriculum</h2>
          <span className="text-sm text-slate-500 font-medium">{phase.weeks.length} modules</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phase.weeks.map(week => (
            <WeekCard key={week.id} week={week} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhasePage;