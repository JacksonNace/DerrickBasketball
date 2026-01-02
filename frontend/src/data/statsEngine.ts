export interface PlayerStats {
  winPercentage: number;
  gamesPlayed: number;
  streak: { length: number; type: string };
  ppg: number;
  twoPtPct: number;
  threePtPct: number;
  totalPoints: number;
  shootingGames: number;
}

export const calculateAllPlayerStats = (games: any[], players: string[]): Record<string, PlayerStats> => {
  const stats: Record<string, any> = {};

  players.forEach(p => {
    stats[p] = {
      wins: 0, games: 0, history: [], 
      pts: 0, shootingGames: 0,
      tpm: 0, tpa: 0, thpm: 0, thpa: 0
    };
  });

  games.forEach(game => {
    const winningTeam = game.winning_team;
    if (!winningTeam) return;

    [
      { name: game.team1, players: game.team1_players },
      { name: game.team2, players: game.team2_players }
    ].forEach(team => {
      team.players.forEach((p: string) => {
        if (!stats[p]) return;
        stats[p].games++;
        
        const result = team.name === winningTeam ? 'W' : 'L';
        stats[p].history.push(result);
        if (result === 'W') stats[p].wins++;

        const pStats = game.player_stats?.[p];
        if (pStats) {
          stats[p].shootingGames++;
          stats[p].pts += pStats.points || 0;
          stats[p].tpm += pStats['2pt_m'] || 0;
          stats[p].tpa += pStats['2pt_a'] || 0;
          stats[p].thpm += pStats['3pt_m'] || 0;
          stats[p].thpa += pStats['3pt_a'] || 0;
        }
      });
    });
  });

  const finalResults: Record<string, PlayerStats> = {};
  players.forEach(p => {
    const s = stats[p];
    if (s.games === 0) return;

    // Streak Logic
    let streak = { length: 0, type: '' };
    if (s.history.length > 0) {
      let count = 1;
      let type = s.history[s.history.length - 1];
      for (let i = s.history.length - 2; i >= 0; i--) {
        if (s.history[i] === type) count++;
        else break;
      }
      if (count >= 3) streak = { length: count, type };
    }

    finalResults[p] = {
      winPercentage: s.wins / s.games,
      gamesPlayed: s.games,
      streak,
      ppg: s.shootingGames > 0 ? s.pts / s.shootingGames : 0,
      twoPtPct: s.tpa > 0 ? s.tpm / s.tpa : 0,
      threePtPct: s.thpa > 0 ? s.thpm / s.thpa : 0,
      totalPoints: s.pts,
      shootingGames: s.shootingGames
    };
  });

  return finalResults;
};