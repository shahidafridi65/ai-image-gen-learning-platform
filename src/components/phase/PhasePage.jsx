// src/pages/phases/PhasePage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCurriculum } from '../../contexts/CurriculumContext';
import { ChevronLeft, Calendar, Target, BookOpen } from 'lucide-react';

const PhasePage = () => {
  const { phaseId } = useParams();
  const { getPhase, progress } = useCurriculum();
  
  const phase = getPhase(parseInt(phaseId));

  if (!phase) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Phase Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const WeekCard = ({ week }) => (
    <Link
      to={`/phase/${phase.id}/week/${week.id}`}
      className="block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{week.title}</h3>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{week.days.length} days</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{week.description}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Progress: 0%</span>
        <span className="text-blue-600 font-medium">Start Learning →</span>
      </div>
    </Link>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Navigation */}
      <Link 
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Dashboard
      </Link>

      {/* Phase Header */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{phase.title}</h1>
            <p className="text-lg text-gray-600">{phase.goal}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Overall Progress</div>
            <div className="text-2xl font-bold text-blue-600">
              {progress.phases?.[phase.id] || 0}%
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
            <Calendar className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Duration</div>
              <div className="font-semibold text-gray-800">{phase.duration}</div>
            </div>
          </div>
          <div className="flex items-center p-4 bg-green-50 rounded-lg">
            <BookOpen className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Weeks</div>
              <div className="font-semibold text-gray-800">{phase.weeks.length} weeks</div>
            </div>
          </div>
          <div className="flex items-center p-4 bg-purple-50 rounded-lg">
            <Target className="w-8 h-8 text-purple-600 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Status</div>
              <div className="font-semibold text-gray-800">In Progress</div>
            </div>
          </div>
        </div>
      </div>

      {/* Weeks Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Curriculum</h2>
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