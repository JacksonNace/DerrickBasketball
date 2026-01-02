export const winterPlayers = ['Astor', 'Ahsanul', 'Bockoven', 'Chance', 'ChrisLeger', 'ChrisNorman', 'Denny', 'Greg', 'Hernan', 'Jackson', 'Jared', 'Joe', 'Landon', 'Matt', 'Mason', 'Mikey', 'Nefty', 'Paolo', 'Quan', 'Roberto', 'Sam', 'Scott', 'Trace', 'Waltman'];

export const winterGames = [
  {
    date: '2025-12-08',
    team1: 'Black',
    team1_players: ['Jackson', 'Quan', 'Hernan', 'Waltman', 'Chance'],
    team1_score: 24,
    team2: 'White',
    team2_players: ['Paolo', 'Roberto', 'Greg', 'Joe', 'ChrisNorman'],
    team2_score: 32,
    winning_team: 'White'
  },
  {
    date: '2025-12-22',
    team1: 'Black',
    team1_players: ['Paolo', 'ChrisNorman', 'Chance', 'ChrisLeger', 'Bockoven'],
    team1_score: 32,
    team2: 'White',
    team2_players: ['Jackson', 'Roberto', 'Joe', 'Landon', 'Quan'],
    team2_score: 31,
    winning_team: 'Black'
  },
  {
    date: '2025-12-23',
    team1: 'White',
    team1_players: ['Joe', 'Quan', 'Landon', 'JJ', 'Roberto'],
    team1_score: 35,
    team2: 'Black',
    team2_players: ['Jared', 'Waltman', 'Chance', 'Jackson', 'ChrisNorman'],
    team2_score: 27,
    winning_team: 'White'
  },
  {
    date: '2025-12-29',
    team1: 'Black',
    team1_players: ['Hernan', 'Mason', 'Sam', 'Neftaly', 'ChrisNorman'],
    team1_score: 48,
    team2: 'White',
    team2_players: ['Joe', 'Jared', 'Waltman', 'ChrisLeger', 'Paolo'],
    team2_score: 45,
    winning_team: 'Black',
    player_stats: {
      'Hernan': { points: 12, '2pt_m': 6, '2pt_a': 10, '3pt_m': 0, '3pt_a': 5 },
      'Mason': { points: 10, '2pt_m': 5, '2pt_a': 14, '3pt_m': 0, '3pt_a': 4 },
      'Sam': { points: 12, '2pt_m': 6, '2pt_a': 8, '3pt_m': 0, '3pt_a': 1 },
      'Neftaly': { points: 0, '2pt_m': 0, '2pt_a': 1, '3pt_m': 0, '3pt_a': 1 },
      'ChrisNorman': { points: 14, '2pt_m': 4, '2pt_a': 10, '3pt_m': 2, '3pt_a': 6 },
      'Joe': { points: 10, '2pt_m': 5, '2pt_a': 11, '3pt_m': 0, '3pt_a': 3 },
      'Jared': { points: 18, '2pt_m': 3, '2pt_a': 8, '3pt_m': 4, '3pt_a': 9 },
      'Waltman': { points: 2, '2pt_m': 1, '2pt_a': 3, '3pt_m': 0, '3pt_a': 3 },
      'ChrisLeger': { points: 10, '2pt_m': 5, '2pt_a': 10, '3pt_m': 0, '3pt_a': 5 },
      'Paolo': { points: 5, '2pt_m': 1, '2pt_a': 2, '3pt_m': 1, '3pt_a': 1 }
    }
  },
  {   
    date: '2025-12-30',
    team1: 'Black',
    team1_players: ['Jared', 'Waltman', 'Joe', 'Quan', 'Roberto'],
    team1_score: 73,
    team2: 'White',
    team2_players: ['Jackson', 'ChrisLeger', 'Sam', 'Paolo', 'ChrisNorman'],
    team2_score: 55,
    winning_team: 'Black',
    player_stats: {
      'Jared': {'points': 18, '2pt_m': 3, '2pt_a': 10, '3pt_m': 4, '3pt_a': 10},
      'Waltman': {'points': 18, '2pt_m': 0, '2pt_a': 1, '3pt_m': 6, '3pt_a': 10},
      'Joe': {'points': 5, '2pt_m': 1, '2pt_a': 3, '3pt_m': 1, '3pt_a': 4},
      'Quan': {'points': 15, '2pt_m': 3, '2pt_a': 10, '3pt_m': 3, '3pt_a': 7},
      'Roberto': {'points': 17, '2pt_m': 7, '2pt_a': 13, '3pt_m': 1, '3pt_a': 6},
      'Jackson': {'points': 8, '2pt_m': 4, '2pt_a': 13, '3pt_m': 0, '3pt_a': 0},
      'ChrisLeger': {'points': 24, '2pt_m': 3, '2pt_a': 5, '3pt_m': 6, '3pt_a': 13},
      'Sam': {'points': 6, '2pt_m': 3, '2pt_a': 6, '3pt_m': 0, '3pt_a': 4},
      'Paolo': {'points': 2, '2pt_m': 1, '2pt_a': 8, '3pt_m': 0, '3pt_a': 3},
      'ChrisNorman': {'points': 15, '2pt_m': 3, '2pt_a': 10, '3pt_m': 3, '3pt_a': 5}
      }
  },
  {   
    date: '2025-12-31',
    team1: 'Black',
    team1_players: ['Hernan', 'Paolo', 'Roberto', 'Sam', 'JJ'],
    team1_score:45,
    team2: 'White',
    team2_players: ['Joe', 'Jared', 'Neftaly', 'Iiams', 'ChrisNorman'],
    team2_score:44,
    winning_team: 'Black',
    player_stats: {
      'Hernan': {'points': 2, '2pt_m': 1, '2pt_a': 6, '3pt_m': 0, '3pt_a': 1},
      'Paolo': {'points': 8, '2pt_m': 4, '2pt_a': 9, '3pt_m': 0, '3pt_a': 1},
      'Roberto': {'points': 19, '2pt_m': 8, '2pt_a': 14, '3pt_m': 0, '3pt_a': 1},
      'Sam': {'points': 16, '2pt_m': 8, '2pt_a': 12, '3pt_m': 0, '3pt_a': 1},
      'JJ': {'points': 0, '2pt_m': 0, '2pt_a': 5, '3pt_m': 0, '3pt_a': 3},
      'Joe': {'points': 5, '2pt_m': 1, '2pt_a': 4, '3pt_m': 1, '3pt_a': 9},
      'Jared': {'points': 16, '2pt_m': 2, '2pt_a': 9, '3pt_m': 0, '3pt_a': 3},
      'Neftaly': {'points': 4, '2pt_m': 2, '2pt_a': 4, '3pt_m': 0, '3pt_a': 3},
      'ChrisNorman': {'points': 12, '2pt_m': 3, '2pt_a': 6, '3pt_m': 2, '3pt_a': 8},
      'Iiams': {'points': 7, '2pt_m': 2, '2pt_a': 8, '3pt_m': 1, '3pt_a': 4}
      }
  },
];