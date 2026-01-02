
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Groups from './Groups';
import Nav from './components/Nav';
import Derrick from './pages/Derrick';
import Admin from './pages/Admin'
import Players from './pages/Players'

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
                  <Route path="/" element={<Derrick />} />
                  <Route path="/players" element={<Players/>} />
                  <Route path="/predict" element={<div>Coming soon!</div>} />
                  <Route path="/managethosescores" element={<Admin/>} />
                </Routes>
              </main>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}