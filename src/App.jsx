import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CurriculumProvider } from './contexts/CurriculumContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './pages/Dashboard';
import WeekPage from './pages/weeks/WeekPage';
import DayPage from './pages/days/DayPage';
import './styles/globals.css';
import PhasePage from './components/phase/PhasePage';
import Documentation from './pages/Documentation';
import AiAgentDocumentation from './pages/AiAgentDocumentation';
import Companies from './pages/Companies';
import DSARoadmap from './pages/DSARoadmap';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Close mobile menu when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (window.innerWidth >= 768) {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    } else {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <CurriculumProvider>
      <Router>
        <div className="flex h-screen bg-slate-50">
          <Sidebar
            isMobileOpen={isMobileMenuOpen}
            setIsMobileOpen={setIsMobileMenuOpen}
            isCollapsed={isSidebarCollapsed}
            setIsCollapsed={setIsSidebarCollapsed}
          />
          <div className="flex-1 flex flex-col overflow-hidden relative">
            <Header onToggleSidebar={toggleSidebar} isMobileMenuOpen={isMobileMenuOpen} />
            <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 lg:p-8 scroll-smooth">
              <div className="max-w-7xl mx-auto space-y-6">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/ai-agent-documentation" element={<AiAgentDocumentation />} />
                  <Route path="/dsa-roadmap" element={<DSARoadmap />} />
                  <Route path="/companies" element={<Companies />} />
                  <Route path="/phase/:phaseId" element={<PhasePage />} />
                  <Route path="/phase/:phaseId/week/:weekId" element={<WeekPage />} />
                  <Route path="/phase/:phaseId/week/:weekId/day/:dayId" element={<DayPage />} />
                </Routes>
              </div>
            </main>
          </div>
        </div>
      </Router>
    </CurriculumProvider>
  );
};

export default App;