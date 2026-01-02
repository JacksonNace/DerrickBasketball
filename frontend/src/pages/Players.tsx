import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { winterGames, winterPlayers } from '../data/winter2026';
import { summerGames, summerPlayers } from '../data/summer2025';
import { calculateAllPlayerStats } from '../data/statsEngine';
import '../styles/Players.css';

const Players = () => {
  const { groupId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedPlayer, setExpandedPlayer] = useState<string | null>(null);

  const games = groupId === 'derrick' ? winterGames : summerGames;
  const players = groupId === 'derrick' ? winterPlayers : summerPlayers;
  const allStats = calculateAllPlayerStats(games, players);

  const filteredPlayers = Object.entries(allStats)
    .filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b[1].winPercentage - a[1].winPercentage);

  const togglePlayerGames = (name: string) => {
    setExpandedPlayer(expandedPlayer === name ? null : name);
  };

  const renderHistory = (name: string) => (
    <div className="player-history-dropdown">
      <h4>Game History for {name}</h4>
      <div className="history-list">
        {games
          .filter(g => g.team1_players.includes(name) || g.team2_players.includes(name))
          .reverse()
          .map((game, i) => {
            const isWin = (game.team1_players.includes(name) && game.winning_team === game.team1) ||
                          (game.team2_players.includes(name) && game.winning_team === game.team2);
            const pStats = (game.player_stats as Record<string, any>)?.[name];

            return (
              <div key={i} className="history-item">
                <div className="history-main-info">
                  <span className={`result-indicator ${isWin ? 'win' : 'loss'}`}>
                    {isWin ? 'W' : 'L'}
                  </span>
                  <span className="history-teams">{game.team1} vs {game.team2}</span>
                </div>

                <div className="history-player-stats">
                  {pStats ? (
                    <>
                      <span className="hist-stat"><strong>{pStats.points}</strong> PTS</span>
                      <span className="hist-stat">{pStats['2pt_m']}/{pStats['2pt_a']} <small>2P</small></span>
                      <span className="hist-stat">{pStats['3pt_m']}/{pStats['3pt_a']} <small>3P</small></span>
                    </>
                  ) : (
                    <span className="no-stats-text">No box score recorded</span>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );

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
            <div key={name} className="player-card-wrapper">
              <div className="player-card">
                <div className="player-card-header">
                  <div className="name-action-group">
                    <span className="player-name">{name}</span>
                    <button className="history-btn" onClick={() => togglePlayerGames(name)}>
                      {expandedPlayer === name ? 'Hide History' : 'View History'}
                    </button>
                  </div>
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

              {expandedPlayer === name && renderHistory(name)}
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