
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Groups from './Groups';
import Nav from './components/Nav';
import DerrickDashboard from './Derrick/Derrick';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Groups />} />

        <Route 
          path="/group/:groupId/*" 
          element={
            <div className="group-layout-container">
              <Nav /> 
              <main className="group-main-content">
                <Routes>
                  <Route path="/" element={<DerrickDashboard />} />
                  <Route path="/players" element={<div>Player Lookup Coming Soon</div>} />
                  <Route path="/winrates" element={<div>Winrates Coming Soon</div>} />
                  <Route path="/predict" element={<div>ML Predictor Coming Soon</div>} />
                </Routes>
              </main>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}