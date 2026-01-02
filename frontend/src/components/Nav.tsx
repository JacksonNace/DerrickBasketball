// src/components/Nav/Nav.tsx
import { Link, useParams, useLocation } from 'react-router-dom';
import { groupsData } from '../data/groups';
import './Nav.css';

const Nav = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const location = useLocation();
  const currentGroup = groupsData.find(g => g.id === groupId);

  const isActive = (path: string) => location.pathname.endsWith(path) ? 'active' : '';

  return (
    <header className="top-nav">
      <div className="nav-left">
        <Link to="/" className="back-btn">← Groups</Link>
        <h1 className="nav-title">{currentGroup?.name}</h1>
      </div>

      <ul className="nav-links">
        <li><Link to={`/group/${groupId}`} className={isActive(groupId || '')}>Dashboard</Link></li>
        <li><Link to={`/group/${groupId}/players`} className={isActive('players')}>Players</Link></li>
        {/* <li><Link to={`/group/${groupId}/predict`} className={isActive('predict')}>ML Predictor (Coming soon)</Link></li> */}
        <li><Link to={`/group/${groupId}/managethosescores`} className={isActive('managethosescores')}>Admin (Coming soon)</Link></li>
      </ul>
    </header>
  );
};

export default Nav;