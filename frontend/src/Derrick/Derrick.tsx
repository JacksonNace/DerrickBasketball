import './Derrick.css';
import { Link, useParams } from 'react-router-dom';
import { groupsData } from '../data/groups';

const Derrick = () => {
  const { groupId } = useParams<{ groupId: string }>();
  
  const currentGroup = groupsData.find(g => g.id === groupId);

  return (
    <div className="derrick-page">
      <nav className="derrick-nav">
        <Link to="/" className="back-btn">← Groups</Link>
        <h1>{currentGroup?.name || 'Group'} Dashboard</h1>
      </nav>

      <main className="derrick-content">
        <div className="placeholder-card">
          <h3>Welcome to {currentGroup?.name}</h3>
          <p>This is a custom frontend for {groupId}.</p>
        </div>
      </main>
    </div>
  );
};

export default Derrick;