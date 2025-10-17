// src/pages/weeks/WeekPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { ChevronLeft, Calendar, Clock, Target } from 'lucide-react';

const WeekPage = () => {
  const { phaseId, weekId } = useParams();
  const { getPhase, getWeek } = useCurriculum();
  
  const phase = getPhase(parseInt(phaseId));
  const week = getWeek(parseInt(phaseId), parseInt(weekId));

  if (!phase || !week) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Week Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const DayCard = ({ day }) => (
    <Link
      to={`/phase/${phase.id}/week/${week.id}/day/${day.id}`}
      className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{day.title}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{day.duration}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{day.description}</p>
      <div className="flex items-center justify-between">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          day.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
          day.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
          day.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {day.difficulty}
        </span>
        <span className="text-blue-600 font-medium">Start →</span>
      </div>
    </Link>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <Link 
          to={`/phase/${phase.id}`}
          className="inline-flex items-center text-gray-600 hover:text-gray-800"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to {phase.title}
        </Link>
      </div>

      {/* Week Header */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{week.title}</h1>
            <p className="text-lg text-gray-600">{week.description}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Week Progress</div>
            <div className="text-2xl font-bold text-blue-600">0%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
            <Calendar className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Days</div>
              <div className="font-semibold text-gray-800">{week.days.length} days</div>
            </div>
          </div>
          <div className="flex items-center p-4 bg-green-50 rounded-lg">
            <Clock className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Hours</div>
              <div className="font-semibold text-gray-800">
                {week.days.reduce((acc, day) => {
                  const hours = parseInt(day.duration) || 6;
                  return acc + hours;
                }, 0)} hours
              </div>
            </div>
          </div>
          <div className="flex items-center p-4 bg-purple-50 rounded-lg">
            <Target className="w-8 h-8 text-purple-600 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Status</div>
              <div className="font-semibold text-gray-800">Ready to Start</div>
            </div>
          </div>
        </div>
      </div>

      {/* Days Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Daily Lessons</h2>
        <div className="grid grid-cols-1 gap-6">
          {week.days.map(day => (
            <DayCard key={day.id} day={day} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekPage;