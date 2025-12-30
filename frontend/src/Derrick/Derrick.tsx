// src/Derrick/Derrick.tsx
import './Derrick.css';
import { useParams } from 'react-router-dom';

const Derrick = () => {
  const { groupId } = useParams<{ groupId: string }>();

  return (
    <div className="derrick-page">
      <main className="derrick-content">
        <div className="placeholder-card">
          <h3>Welcome to the Dashboard</h3>
          <p>This is the custom frontend for <strong>{groupId}</strong>.</p>
        </div>
      </main>
    </div>
  );
};

export default Derrick;