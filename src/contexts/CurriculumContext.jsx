// src/contexts/CurriculumContext.jsx
import React, { createContext, useContext, useState, useMemo } from 'react';
import { curriculum as initialCurriculum, getAllDays, getProgressStats, getPhaseProgress } from '../data/curriculum';

const CurriculumContext = createContext();

export const useCurriculum = () => {
  const context = useContext(CurriculumContext);
  if (!context) {
    throw new Error('useCurriculum must be used within a CurriculumProvider');
  }
  return context;
};

export const CurriculumProvider = ({ children }) => {
  const [curriculum] = useState(initialCurriculum);
  const [userProgress, setUserProgress] = useState({
    completedDays: [],
    completedWeeks: [],
    completedPhases: [],
    overall: 0
  });

  // Calculate progress whenever completedDays changes
  const progress = useMemo(() => {
    const stats = getProgressStats(userProgress.completedDays);
    const phaseProgress = {};

    curriculum.phases.forEach(phase => {
      phaseProgress[phase.id] = getPhaseProgress(phase.id, userProgress.completedDays);
    });

    return {
      overall: stats.percentage,
      phases: phaseProgress,
      ...stats
    };
  }, [userProgress.completedDays, curriculum.phases]);

  const getPhase = (phaseId) => {
    return curriculum.phases.find(phase => phase.id === phaseId);
  };

  const getWeek = (phaseId, weekId) => {
    const phase = getPhase(phaseId);
    return phase?.weeks.find(week => week.id === weekId);
  };

  const getDay = (phaseId, weekId, dayId) => {
    const week = getWeek(phaseId, weekId);
    return week?.days.find(day => day.id === dayId);
  };

  const getNextDay = (currentPhaseId, currentWeekId, currentDayId) => {
    const allDays = getAllDays();
    const currentIndex = allDays.findIndex(day =>
      day.phaseId === currentPhaseId &&
      day.weekId === currentWeekId &&
      day.id === currentDayId
    );

    if (currentIndex < allDays.length - 1) {
      const nextDay = allDays[currentIndex + 1];
      return {
        phaseId: nextDay.phaseId,
        weekId: nextDay.weekId,
        dayId: nextDay.id  // Use 'id' instead of 'dayId'
      };
    }
    return null;
  };

  const getPrevDay = (currentPhaseId, currentWeekId, currentDayId) => {
    const allDays = getAllDays();
    const currentIndex = allDays.findIndex(day =>
      day.phaseId === currentPhaseId &&
      day.weekId === currentWeekId &&
      day.id === currentDayId
    );

    if (currentIndex > 0) {
      const prevDay = allDays[currentIndex - 1];
      return {
        phaseId: prevDay.phaseId,
        weekId: prevDay.weekId,
        dayId: prevDay.id  // Use 'id' instead of 'dayId'
      };
    }
    return null;
  };

  const markDayComplete = (phaseId, weekId, dayId) => {
    const dayKey = `${phaseId}-${weekId}-${dayId}`;
    setUserProgress(prev => {
      const completedDays = prev.completedDays.includes(dayKey)
        ? prev.completedDays
        : [...prev.completedDays, dayKey];

      return {
        ...prev,
        completedDays
      };
    });
  };

  const value = {
    curriculum,
    progress,
    getPhase,
    getWeek,
    getDay,
    getNextDay,
    getPrevDay,
    markDayComplete
  };

  return (
    <CurriculumContext.Provider value={value}>
      {children}
    </CurriculumContext.Provider>
  );
};