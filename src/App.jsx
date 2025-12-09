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

function App() {
  return (
    <CurriculumProvider>
      <Router>
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/ai-agent-documentation" element={<AiAgentDocumentation />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/phase/:phaseId" element={<PhasePage />} />
                <Route path="/phase/:phaseId/week/:weekId" element={<WeekPage />} />
                <Route path="/phase/:phaseId/week/:weekId/day/:dayId" element={<DayPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </CurriculumProvider>
  );
}

export default App;