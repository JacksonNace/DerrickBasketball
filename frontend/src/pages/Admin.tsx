import { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'your_secret_password') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect Password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <form className="login-box" onSubmit={handleLogin}>
          <h3>Admin Access</h3>
          <input 
            type="password" 
            placeholder="Enter Admin Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Unlock Form</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <h2>Add New Game Record</h2>
      <form className="add-game-form">
        <div className="form-group">
          <label>Winner</label>
          <select><option>White</option><option>Black</option></select>
        </div>
        {/* We will build out the dynamic player selection next */}
        <button type="button" onClick={() => alert('Sending to Azure...')}>
          Push to GitHub
        </button>
      </form>
    </div>
  );
};

export default Admin;