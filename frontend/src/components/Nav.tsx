import { Link, useLocation } from 'react-router-dom';
import { groupsData } from '../data/groups';
import '../styles/Nav.css';

const Nav = () => {
  const location = useLocation();

  const currentGroup = groupsData.find(g => g.id === 'derrick-league');

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return 'active';
    return location.pathname.includes(path) && path !== '/' ? 'active' : '';
  };

  return (
    <header className="top-nav">
      <div className="nav-left">
        <h1 className="nav-title">{currentGroup?.name || "Derrick League"}</h1>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className={isActive('/')}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/players" className={isActive('/players')}>
            Players
          </Link>
        </li>
        <li>
          <Link to="/admin" className={isActive('/admin')}>
            Admin (Coming soon)
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;