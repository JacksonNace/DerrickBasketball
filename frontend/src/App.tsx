// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { groupsData } from './data/groups';
import Derrick from './Derrick/Derrick'; 
import './App.css';

function Groups() {
  return (
    <div className="MainWrapper">
      <div className="GroupsBoundaryBox">
        <h2 className="BoxTitle">Groups</h2>
        {groupsData.map((group, index) => (
          <div key={group.id} className="GroupItemWrapper">
            <Link to={`/group/${group.id}`} className="GroupButton">
              {group.name}
            </Link>
            {index !== groupsData.length - 1 && <hr className="HorizontalDivider" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Groups />} />
        <Route path="/group/:groupId" element={<Derrick />} />
      </Routes>
    </Router>
  );
}