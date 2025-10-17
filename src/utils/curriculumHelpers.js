// src/utils/curriculumHelpers.js
import { curriculum } from '../data/curriculum';

export const getAllDays = () => {
    const days = [];
    curriculum.phases.forEach(phase => {
        phase.weeks.forEach(week => {
            week.days.forEach(day => {
                days.push({
                    ...day,
                    phaseId: phase.id,
                    weekId: week.id,
                    id: day.id,
                    phaseTitle: phase.title,
                    weekTitle: week.title
                });
            });
        });
    });
    return days;
};

export const getProgressStats = (completedDays = []) => {
    const totalDays = getAllDays().length;
    const completedCount = completedDays.length;
    const percentage = Math.round((completedCount / totalDays) * 100);

    return {
        totalDays,
        completedCount,
        percentage,
        remaining: totalDays - completedCount
    };
};

export const getPhaseProgress = (phaseId, completedDays = []) => {
    const phase = curriculum.phases.find(p => p.id === phaseId);
    if (!phase) return 0;

    const phaseDays = [];
    phase.weeks.forEach(week => {
        week.days.forEach(day => {
            phaseDays.push(`${phaseId}-${week.id}-${day.id}`);
        });
    });

    const completedPhaseDays = completedDays.filter(dayId =>
        phaseDays.includes(dayId)
    );

    return Math.round((completedPhaseDays.length / phaseDays.length) * 100);
};

export const findDay = (phaseId, weekId, dayId) => {
    const phase = curriculum.phases.find(p => p.id === phaseId);
    if (!phase) return null;

    const week = phase.weeks.find(w => w.id === weekId);
    if (!week) return null;

    const day = week.days.find(d => d.id === dayId);
    if (!day) return null;

    return {
        ...day,
        phaseId: phase.id,
        weekId: week.id,
        phaseTitle: phase.title,
        weekTitle: week.title
    };
};