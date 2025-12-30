// src/Groups.tsx
import { Link } from 'react-router-dom';
import { groupsData } from './data/groups'; // Import your data
import './App.css';

const Groups = () => {
  return (
    <div className="MainWrapper">
      <div className="GroupsBoundaryBox">
        <h2 className="BoxTitle">Groups</h2>
        {groupsData.map((group, index) => (
          <div key={group.id} className="GroupItemWrapper">
            <Link to={`/group/${group.id}`} className="GroupButton">
              {group.name}
            </Link>
            {/* Divider logic */}
            {index !== groupsData.length - 1 && <hr className="HorizontalDivider" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;