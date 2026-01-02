// import { useParams } from 'react-router-dom';
// import { winterGames } from '../data/winter2026';
// import { summerGames } from '../data/summer2025';
// import '../styles/Derrick.css';

// const Derrick = () => {
//   // I forgot what i did the groupid or useparams for ngl
//   const { groupId } = useParams<{ groupId: string }>();

//   const allGames = [...summerGames, ...winterGames];
//   const chronologicalGames = [...allGames].reverse();

//   return (
//     <div className="derrick-page">
//       <main className="derrick-content">
//         <h2 className="section-title">Recent Games</h2>
        
//         <div className="games-container">
//           {chronologicalGames.map((game, index) => (
//             <div key={index} className="game-card">
//               {/* header */}
//               <div className="game-card-header">
//                 <span className="teams-text">{game.team1} vs {game.team2}</span>
//                 <span className={`winner-badge ${game.winning_team.toLowerCase()}`}>
//                   Winner: {game.winning_team || 'Draw'}
//                 </span>
//               </div>

//               {/* rosters */}
//               <div className="rosters-section">
//                 <p><strong>{game.team1}:</strong> {game.team1_players.join(', ')}</p>
//                 <p><strong>{game.team2}:</strong> {game.team2_players.join(', ')}</p>
//               </div>

//               {/* conditional stats table */}
//               {game.player_stats && (
//                 <div className="stats-section">
//                   <table className="stats-table">
//                     <thead>
//                       <tr>
//                         <th>Player</th>
//                         <th>PTS</th>
//                         <th>2PM/A</th>
//                         <th>3PM/A</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {Object.entries(game.player_stats).map(([name, stat]: [string, any]) => (
//                         <tr key={name}>
//                           <td>{name}</td>
//                           <td>{stat.points}</td>
//                           <td>{stat['2pt_m']}/{stat['2pt_a']}</td>
//                           <td>{stat['3pt_m']}/{stat['3pt_a']}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Derrick;

import { useParams } from 'react-router-dom';
import { winterGames } from '../data/winter2026';
import { summerGames } from '../data/summer2025';
import '../styles/Derrick.css';

const Derrick = () => {
  // groupId can be used if you wanted to filter this page to only one group,
  // but for now, we are showing the full "Recent Games" feed.
  const { groupId } = useParams<{ groupId: string }>();

  // 1. Tag games with their season and merge
  const allGames = [
    ...summerGames.map(g => ({ ...g, season: 'Summer' })),
    ...winterGames.map(g => ({ ...g, season: 'Winter' }))
  ];

  // 2. Reverse to show newest at the top
  const chronologicalGames = [...allGames].reverse();

  return (
    <div className="derrick-page">
      <main className="derrick-content">
        <h2 className="section-title">Recent Games Feed</h2>
        
        <div className="games-container">
          {chronologicalGames.map((game, index) => (
            <div key={index} className="game-card">
              {/* Season and Date Header */}
              <div className="game-meta-row">
                <span className={`season-tag ${game.season.toLowerCase()}`}>
                  {game.season}
                </span>
                <span className="game-date-text">
                  {game.date || 'Date Unknown'}
                </span>
              </div>

              {/* Main Game Header */}
              <div className="game-card-header">
                <div className="matchup-info">
                  <span className="teams-text">
                    {game.team1} 
                    {game.team1_score !== undefined && <span className="score-val"> {game.team1_score}</span>}
                    <span className="vs-divider"> vs </span>
                    {game.team2_score !== undefined && <span className="score-val">{game.team2_score} </span>}
                    {game.team2}
                  </span>
                </div>
                <span className={`winner-badge ${game.winning_team.toLowerCase()}`}>
                  Winner: {game.winning_team}
                </span>
              </div>

              {/* Rosters */}
              <div className="rosters-section">
                <div className="roster-row">
                  <span className="roster-label">{game.team1}:</span> {game.team1_players.join(', ')}
                </div>
                <div className="roster-row">
                  <span className="roster-label">{game.team2}:</span> {game.team2_players.join(', ')}
                </div>
              </div>

              {/* Conditional Stats Table */}
              {game.player_stats && (
                <div className="stats-section">
                  <h4 className="box-score-title">Box Score</h4>
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
                          <td><strong>{stat.points}</strong></td>
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