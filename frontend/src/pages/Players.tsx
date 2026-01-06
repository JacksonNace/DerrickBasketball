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
  const [seasonFilter, setSeasonFilter] = useState<'all' | 'winter' | 'summer'>('all');

  let displayGames;
  let displayPlayers;

  if (seasonFilter === 'winter') {
    displayGames = winterGames;
    displayPlayers = winterPlayers;
  } else if (seasonFilter === 'summer') {
    displayGames = summerGames;
    displayPlayers = summerPlayers;
  } else {
    // 'all' mode
    displayGames = [...winterGames, ...summerGames];
    displayPlayers = Array.from(new Set([...winterPlayers, ...summerPlayers]));
  }

  const currentStats = calculateAllPlayerStats(displayGames, displayPlayers);
  const allHistoricalGames = [
    ...[...winterGames].reverse().map(g => ({ ...g, season: 'Winter' })),
    ...[...summerGames].reverse().map(g => ({ ...g, season: 'Summer' }))
  ];

  const filteredPlayers = Object.entries(currentStats)
    .filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => b[1].winPercentage - a[1].winPercentage);

  const togglePlayerGames = (name: string) => {
    setExpandedPlayer(expandedPlayer === name ? null : name);
  };

  const renderHistory = (name: string) => (
    <div className="player-history-dropdown">
      <h4>Full Career History: {name}</h4>
      <div className="history-list">
        {allHistoricalGames
          .filter(g => g.team1_players.includes(name) || g.team2_players.includes(name))
          .map((game, i) => {
            const isWin = (game.team1_players.includes(name) && game.winning_team === game.team1) ||
                          (game.team2_players.includes(name) && game.winning_team === game.team2);
            const pStats = (game.player_stats as Record<string, any>)?.[name];

            return (
              <div key={`${game.season}-${i}`} className="history-item">
                <div className="hist-col-meta">
                  <span className={`season-badge ${game.season.toLowerCase()}`}>{game.season}</span>
                  <span className="game-date">{game.date || '---'}</span>
                </div>

                <div className="hist-col-main">
                  <span className={`result-indicator ${isWin ? 'win' : 'loss'}`}>
                    {isWin ? 'W' : 'L'}
                  </span>
                  <span className="history-teams">
                    {game.team1} vs {game.team2}
                    {game.team1_score !== undefined && (
                      <span className="history-score"> ({game.team1_score}-{game.team2_score})</span>
                    )}
                  </span>
                </div>

                <div className="hist-col-stats">
                  {pStats ? (
                    <>
                      <div className="hist-stat-val"><strong>{pStats.points}</strong><small>PTS</small></div>
                      <div className="hist-stat-val">{pStats['2pt_m']}/{pStats['2pt_a']}<small>2P</small></div>
                      <div className="hist-stat-val">{pStats['3pt_m']}/{pStats['3pt_a']}<small>3P</small></div>
                    </>
                  ) : (
                    <span className="no-stats-text">---</span>
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
        <h2 className="section-title">
          {seasonFilter.toUpperCase()} Standings
        </h2>
        
        <div className="controls-container">
          {/* Season Toggle Buttons */}
          <div className="season-toggle">
            <button 
              className={seasonFilter === 'all' ? 'active' : ''} 
              onClick={() => setSeasonFilter('all')}
            >All</button>
            <button 
              className={seasonFilter === 'winter' ? 'active' : ''} 
              onClick={() => setSeasonFilter('winter')}
            >Winter</button>
            <button 
              className={seasonFilter === 'summer' ? 'active' : ''} 
              onClick={() => setSeasonFilter('summer')}
            >Summer</button>
          </div>

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
                      {expandedPlayer === name ? 'Close' : 'Stats History'}
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