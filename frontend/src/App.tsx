import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import Derrick from './pages/Derrick';
import Admin from './pages/Admin';
import Players from './pages/Players';

export default function App() {
  return (
    <Router>
      <div className="group-layout-container">
        <Nav /> 
        <main className="group-main-content">
          <Routes>
            <Route path="/" element={<Derrick />} />
            <Route path="/players" element={<Players/>} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/predict" element={<div>Coming soon!</div>} />
            <Route path="/group/:groupId/*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}