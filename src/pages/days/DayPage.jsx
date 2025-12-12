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
    CheckCircle,
    ExternalLink
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
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
                    <h1 className="text-2xl font-bold text-slate-800 mb-4">Day Not Found</h1>
                    <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
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
            className="group block bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200"
        >
            <div className="flex items-start space-x-4">
                <div className={`p-2.5 rounded-lg flex-shrink-0 ${resource.type === 'video' ? 'bg-red-50 text-red-600' :
                        resource.type === 'tutorial' ? 'bg-emerald-50 text-emerald-600' :
                            resource.type === 'documentation' ? 'bg-blue-50 text-blue-600' :
                                'bg-purple-50 text-purple-600'
                    }`}>
                    {resource.type === 'video' ? <Video className="w-5 h-5" /> :
                        resource.type === 'tutorial' ? <PlayCircle className="w-5 h-5" /> :
                            resource.type === 'documentation' ? <FileText className="w-5 h-5" /> :
                                <BookOpen className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">{resource.title}</h4>
                        <ExternalLink className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity ml-2 flex-shrink-0" />
                    </div>
                    <div className="flex items-center mt-2 space-x-3 text-xs text-slate-500">
                        <span className="capitalize font-medium bg-slate-100 px-2 py-0.5 rounded-full">{resource.type}</span>
                        <span>{resource.duration}</span>
                    </div>
                </div>
            </div>
        </a>
    );

    return (
        <div className="space-y-6 animate-fade-in max-w-7xl mx-auto">
            {/* Navigation */}
            <div className="flex items-center justify-between sticky top-0 bg-slate-50/95 backdrop-blur z-20 py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
                <Link
                    to={`/phase/${phaseId}/week/${weekId}`}
                    className="flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors"
                >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back to Week
                </Link>

                <div className="flex items-center space-x-3">
                    {prevDay ? (
                        <Link
                            to={`/phase/${prevDay.phaseId}/week/${prevDay.weekId}/day/${prevDay.dayId}`}
                            className="flex items-center px-3 py-2 border border-slate-200 bg-white text-slate-600 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-medium"
                        >
                            <ChevronLeft className="w-4 h-4 mr-1" />
                            Prev
                        </Link>
                    ) : <div className="w-[70px]"></div>}

                    {nextDay && (
                        <Link
                            to={`/phase/${nextDay.phaseId}/week/${nextDay.weekId}/day/${nextDay.dayId}`}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-sm hover:shadow active:scale-95 transition-all text-sm font-medium"
                        >
                            Next Lesson
                            <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                    )}
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                        <div className="inline-flex items-center space-x-2 text-sm text-slate-500 mb-3">
                            <span className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide">Day {dayId}</span>
                            <span>•</span>
                            <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> {day.duration}</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{day.title}</h1>
                        <p className="text-lg text-slate-600 leading-relaxed">{day.description}</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 text-white min-w-[80px] h-[80px]">
                        <BookOpen className="w-8 h-8" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-100">
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                        <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                            <Code2 className="w-4 h-4 mr-2 text-blue-500" /> Practice
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{day.practice}</p>
                    </div>
                    <div className="bg-emerald-50/50 p-5 rounded-xl border border-emerald-100/50">
                        <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                            <Target className="w-4 h-4 mr-2 text-emerald-500" /> Project
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{day.project}</p>
                    </div>
                    <div className="bg-purple-50/50 p-5 rounded-xl border border-purple-100/50">
                        <h3 className="font-semibold text-slate-800 mb-2 flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-purple-500" /> Time Commitment
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{day.duration} of focused learning time recommended.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Topics */}
                    <section className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 border border-slate-200">
                        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                            <ListIcon className="w-5 h-5 mr-3 text-blue-600" />
                            Key Topics
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {day.topics.map((topic, index) => (
                                <div key={index} className="flex items-start p-4 bg-slate-50/80 rounded-xl hover:bg-slate-100 transition-colors">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span className="text-slate-700 font-medium">{topic}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Progress */}
                    <section className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
                        <h2 className="text-lg font-bold text-slate-800 mb-4">Tracking</h2>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm text-slate-600 mb-2 font-medium">
                                    <span>Completion</span>
                                    <span>0%</span>
                                </div>
                                <div className="bg-slate-100 rounded-full h-2.5 overflow-hidden">
                                    <div className="bg-blue-600 h-full rounded-full w-0"></div>
                                </div>
                            </div>
                            <button
                                onClick={() => markDayComplete(parseInt(phaseId), parseInt(weekId), parseInt(dayId))}
                                className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 active:scale-95 transition-all flex items-center justify-center shadow-lg shadow-slate-900/10"
                            >
                                <CheckCircle className="w-5 h-5 mr-2" />
                                Mark Complete
                            </button>
                        </div>
                    </section>

                    {/* Resources */}
                    <section className="bg-white rounded-2xl shadow-sm p-6 border border-slate-200">
                        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                            <BookOpen className="w-5 h-5 mr-2 text-indigo-500" />
                            Resources
                        </h2>
                        <div className="space-y-3">
                            {day.resources.map((resource, index) => (
                                <ResourceCard key={index} resource={resource} />
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

// Helper component for missing icon
const ListIcon = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

export default DayPage;