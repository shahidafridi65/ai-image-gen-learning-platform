// src/pages/weeks/WeekPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { ChevronLeft, Calendar, Clock, Target, ArrowRight } from 'lucide-react';

const WeekPage = () => {
  const { phaseId, weekId } = useParams();
  const { getPhase, getWeek } = useCurriculum();

  const phase = getPhase(parseInt(phaseId));
  const week = getWeek(parseInt(phaseId), parseInt(weekId));

  if (!phase || !week) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Week Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const DayCard = ({ day }) => (
    <Link
      to={`/phase/${phase.id}/week/${week.id}/day/${day.id}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 p-6 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{day.title}</h3>
        <div className="flex items-center space-x-2 text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-full border border-slate-100">
          <Clock className="w-3.5 h-3.5" />
          <span>{day.duration}</span>
        </div>
      </div>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">{day.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${day.difficulty === 'Beginner' ? 'bg-emerald-100 text-emerald-700' :
            day.difficulty === 'Intermediate' ? 'bg-amber-100 text-amber-700' :
              day.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                'bg-purple-100 text-purple-700'
          }`}>
          {day.difficulty}
        </span>
        <span className="text-blue-600 font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform">
          Start Lesson <ArrowRight className="w-4 h-4 ml-1" />
        </span>
      </div>
    </Link>
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-2">
        <Link
          to={`/phase/${phase.id}`}
          className="inline-flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to {phase.title}
        </Link>
      </div>

      {/* Week Header */}
      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wide mb-3">
                Week {week.id}
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-3">{week.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">{week.description}</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 min-w-[160px] border border-slate-100">
              <div className="text-sm font-medium text-slate-500 mb-2">Week Progress</div>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-blue-600">0</span>
                <span className="text-lg text-slate-400 font-medium">%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3 overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full w-0"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-blue-50/50 rounded-xl border border-blue-100/50">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mr-4">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Days</div>
                <div className="font-bold text-slate-800">{week.days.length} days</div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/50">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg mr-4">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Total Hours</div>
                <div className="font-bold text-slate-800">
                  {week.days.reduce((acc, day) => {
                    const hours = parseInt(day.duration) || 6;
                    return acc + hours;
                  }, 0)} hours
                </div>
              </div>
            </div>
            <div className="flex items-center p-4 bg-purple-50/50 rounded-xl border border-purple-100/50">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-4">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Status</div>
                <div className="font-bold text-slate-800">Ready to Start</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Days Grid */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          Daily Lessons
          <span className="ml-3 text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">{week.days.length} lessons</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {week.days.map(day => (
            <DayCard key={day.id} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekPage;