import { useParams } from 'react-router-dom';
import { winterGames } from '../data/winter2026';
import { summerGames } from '../data/summer2025';
import '../styles/Derrick.css';

const Derrick = () => {
  // I forgot what i did the groupid or useparams for ngl
  const { groupId } = useParams<{ groupId: string }>();

  const allGames = [...summerGames, ...winterGames];
  const chronologicalGames = [...allGames].reverse();

  return (
    <div className="derrick-page">
      <main className="derrick-content">
        <h2 className="section-title">Recent Games</h2>
        
        <div className="games-container">
          {chronologicalGames.map((game, index) => (
            <div key={index} className="game-card">
              {/* header */}
              <div className="game-card-header">
                <span className="teams-text">{game.team1} vs {game.team2}</span>
                <span className={`winner-badge ${game.winning_team.toLowerCase()}`}>
                  Winner: {game.winning_team || 'Draw'}
                </span>
              </div>

              {/* rosters */}
              <div className="rosters-section">
                <p><strong>{game.team1}:</strong> {game.team1_players.join(', ')}</p>
                <p><strong>{game.team2}:</strong> {game.team2_players.join(', ')}</p>
              </div>

              {/* conditional stats table */}
              {game.player_stats && (
                <div className="stats-section">
                  <table className="stats-table">
                    <thead>
                      <tr>
                        <th>Player</th>
                        <th>PTS</th>
                        <th>2PM/A</th>
                        <th>3PM/A</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(game.player_stats).map(([name, stat]: [string, any]) => (
                        <tr key={name}>
                          <td>{name}</td>
                          <td>{stat.points}</td>
                          <td>{stat['2pt_m']}/{stat['2pt_a']}</td>
                          <td>{stat['3pt_m']}/{stat['3pt_a']}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Derrick;