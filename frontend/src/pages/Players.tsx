import { useState } from 'react'; // Added useState
import { useParams } from 'react-router-dom';
import { winterGames, winterPlayers } from '../data/winter2026';
import { summerGames, summerPlayers } from '../data/summer2025';
import { calculateAllPlayerStats } from '../data/statsEngine'; 
import './Players.css';

const Players = () => {
  const { groupId } = useParams();
  const [searchTerm, setSearchTerm] = useState(''); // State for search

  const games = groupId === 'derrick' ? winterGames : summerGames;
  const players = groupId === 'derrick' ? winterPlayers : summerPlayers;
  
  const allStats = calculateAllPlayerStats(games, players);
  
  // Filter and then Sort
  const filteredPlayers = Object.entries(allStats)
    .filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b[1].winPercentage - a[1].winPercentage);

  return (
    <div className="players-page">
      <div className="players-header">
        <h2 className="section-title">Player Standings</h2>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search players..." 
            className="player-search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="players-grid">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map(([name, stats]) => (
            <div key={name} className="player-card">
              <div className="player-card-header">
                <span className="player-name">{name}</span>
                {stats.streak.length >= 3 && (
                  <span className={`streak-badge ${stats.streak.type}`}>
                    {stats.streak.length}{stats.streak.type}
                  </span>
                )}
              </div>
              
              <div className="player-stats-horizontal">
                <div className="stat-column">
                  <div className="stat-item">
                    <span className="label">Win Rate</span>
                    <span className="value">{(stats.winPercentage * 100).toFixed(0)}%</span>
                  </div>
                  <div className="stat-item">
                    <span className="label">Games</span>
                    <span className="value">{stats.gamesPlayed}</span>
                  </div>
                </div>

                <div className="stat-column">
                  <div className="stat-item">
                    <span className="label">Avg Pts</span>
                    <span className="value">{stats.ppg.toFixed(1)}</span>
                  </div>
                  <div className="stat-item">
                    <span className="label">2P %</span>
                    <span className="value">{(stats.twoPtPct * 100).toFixed(0)}%</span>
                  </div>
                  <div className="stat-item">
                    <span className="label">3P %</span>
                    <span className="value">{(stats.threePtPct * 100).toFixed(0)}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">No players found matching "{searchTerm}"</div>
        )}
      </div>
    </div>
  );
};

export default Players;