// src/pages/days/DayPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCurriculum } from '../../contexts/CurriculumContext';
import {
    ChevronLeft,
    ChevronRight,
    BookOpen,
    Code2,
    Video,
    FileText,
    Target,
    PlayCircle,
    Clock,
    CheckCircle
} from 'lucide-react';

const DayPage = () => {
    const { phaseId, weekId, dayId } = useParams();
    const { getDay, getNextDay, getPrevDay, markDayComplete } = useCurriculum();

    const day = getDay(parseInt(phaseId), parseInt(weekId), parseInt(dayId));
    const nextDay = getNextDay(parseInt(phaseId), parseInt(weekId), parseInt(dayId));
    const prevDay = getPrevDay(parseInt(phaseId), parseInt(weekId), parseInt(dayId));

    if (!day) {
        return (
            <div className="p-6">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Day Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:text-blue-700">
                        Return to Dashboard
                    </Link>
                </div>
            </div>
        );
    }

    const ResourceCard = ({ resource }) => (
        <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
        >
            <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${resource.type === 'video' ? 'bg-red-50' :
                    resource.type === 'tutorial' ? 'bg-green-50' :
                        resource.type === 'documentation' ? 'bg-blue-50' :
                            'bg-purple-50'
                    }`}>
                    {resource.type === 'video' ? <Video className="w-5 h-5 text-red-600" /> :
                        resource.type === 'tutorial' ? <PlayCircle className="w-5 h-5 text-green-600" /> :
                            resource.type === 'documentation' ? <FileText className="w-5 h-5 text-blue-600" /> :
                                <BookOpen className="w-5 h-5 text-purple-600" />}
                </div>
                <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{resource.title}</h4>
                    <p className="text-sm text-gray-600 capitalize">{resource.type}</p>
                    <p className="text-xs text-gray-500 mt-1">{resource.duration}</p>
                </div>
            </div>
        </a>
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-8">
                <Link
                    to={`/phase/${phaseId}/week/${weekId}`}
                    className="flex items-center text-gray-600 hover:text-gray-800"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back to Week
                </Link>

                <div className="flex items-center space-x-4">
                    {prevDay && (
                        <Link
                            to={`/phase/${prevDay.phaseId}/week/${prevDay.weekId}/day/${prevDay.dayId}`}
                            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Previous
                        </Link>
                    )}
                    {nextDay && (
                        <Link
                            to={`/phase/${nextDay.phaseId}/week/${nextDay.weekId}/day/${nextDay.dayId}`}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Next
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    )}
                </div>
            </div>

            {/* Header */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{day.title}</h1>
                        <p className="text-lg text-gray-600">{day.description}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-2">Practice</h3>
                        <p className="text-gray-600">{day.practice}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-700 mb-2">Project</h3>
                        <p className="text-gray-600">{day.project}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="flex items-center text-gray-700 mb-2">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="font-semibold">Estimated Time</span>
                        </div>
                        <p className="text-gray-600">{day.duration}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Topics */}
                    <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                            <Target className="w-5 h-5 mr-2 text-blue-600" />
                            Learning Topics
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {day.topics.map((topic, index) => (
                                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                    <span className="text-gray-700">{topic}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Resources */}
                    <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Learning Resources</h2>
                        <div className="space-y-3">
                            {day.resources.map((resource, index) => (
                                <ResourceCard key={index} resource={resource} />
                            ))}
                        </div>
                    </section>

                    {/* Progress */}
                    <section className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Progress</h2>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm text-gray-600 mb-1">
                                    <span>Day Completion</span>
                                    <span>0%</span>
                                </div>
                                <div className="bg-gray-200 rounded-full h-2">
                                    <div className="bg-blue-600 h-2 rounded-full w-0"></div>
                                </div>
                            </div>
                            <button
                                onClick={() => markDayComplete(parseInt(phaseId), parseInt(weekId), parseInt(dayId))}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                            >
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Mark as Complete
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DayPage;