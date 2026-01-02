export const summerPlayers = ['Astor', 'Ahsanul', 'Bockoven', 'Chance', 'ChrisLeger', 'ChrisMolder', 'ChrisNorman', 'Denny', 'Greg', 'Hernan', 'Jackson', 'Jared', 'Jean', 'Joe', 'Landon', 'Matt', 'Mason', 'Mikey', 'Nefty', 'Paolo', 'Quan', 'Roberto', 'Sam', 'Sawyer', 'Scott', 'Trace', 'Waltman'];

export const summerGames = [
  // June 2nd 2025 --- Black 20 - 23 White
  {
    date: '2025-06-02',
    team1: 'Black',
    team1_players: ['Jackson', 'Joe', 'Mikey', 'Paolo', 'Jared'],
    team1_score:20,
    team2: 'White',
    team2_players: ['Quan', 'Roberto', 'Greg', 'Bockoven', 'Hernan'],
    team2_score:23,
    winning_team: 'White'
  },
  // June 3rd 2025 --- Black 24 - 22 White
  {
    date: '2025-06-03',
    team1: 'White',
    team1_players: ['Jackson', 'Landon', 'Quan', 'Roberto', 'Hernan'],
    team1_score: 22,
    team2: 'Black',
    team2_players: ['Matt', 'Greg', 'Joe', 'Bockoven', 'Mikey'],
    team2_score: 24,
    winning_team: 'White'
  },
  // June 4th 2025 --- Black 21 - 23 White*-
  {
    date: '2025-06-04',
    team1: 'Black',
    team1_players: ['Landon', 'Joe', 'Jean', 'Scott', 'Mikey'],
    team1_score:21,
    team2: 'White',
    team2_players: ['Jared', 'Nefty', 'Hernan', 'Quan', 'Waltman'],
    team2_score:'23',
    winning_team: 'White'
  },
  // June 6th 2025 --- Black 25 - 27 White
  {
    date:'2025-06-06',
    team1: 'Black',
    team1_players: ['Jared', 'Hernan', 'Jean', 'Paolo', 'Mikey'],
    team1_score:25,
    team2: 'White',
    team2_players: ['Astor', 'Landon', 'Jackson', 'Joe', 'Mason'],
    team2_score:27,
    winning_team: 'White'
  },
  // June 9th 2025 --- Black 62 - 61 White
  {
    date: '2025-06-09',
    team1: 'Black',
    team1_players: ['Bockoven', 'Hernan', 'Jean', 'Astor', 'ChrisLeger'],
    team1_score: 62,
    team2: 'White',
    team2_players: ['Jared', 'Waltman', 'Quan', 'Joe', 'Chance'],
    team2_score:61,
    winning_team: 'Black',
    player_stats: {
      'Hernan': { points: 13, '2pt_m': 5, '2pt_a': 7, '3pt_m': 1, '3pt_a': 1 },
      'Jean': { points: 8, '2pt_m': 1, '2pt_a': 7, '3pt_m': 2, '3pt_a': 6 },
      'Astor': { points: 12, '2pt_m': 6, '2pt_a': 13, '3pt_m': 0, '3pt_a': 3 },
      'Bockoven': { points: 12, '2pt_m': 0, '2pt_a': 1, '3pt_m': 4, '3pt_a': 8 },
      'ChrisLeger': { points: 17, '2pt_m': 4, '2pt_a': 7, '3pt_m': 3, '3pt_a': 12 },
      'Joe': { points: 13, '2pt_m': 5, '2pt_a': 8, '3pt_m': 1, '3pt_a': 5 },
      'Quan': { points: 2, '2pt_m': 1, '2pt_a': 6, '3pt_m': 0, '3pt_a': 1 },
      'Jared': { points: 23, '2pt_m': 7, '2pt_a': 12, '3pt_m': 3, '3pt_a': 8 },
      'Waltman': { points: 10, '2pt_m': 2, '2pt_a': 2, '3pt_m': 2, '3pt_a': 8 },
      'Chance': { points: 13, '2pt_m': 5, '2pt_a': 9, '3pt_m': 1, '3pt_a': 7 }
    }
  },
  // June 10th 2025 --- Black 47 - 48 white
  {
    date: '2025-06-10',
    team1: 'Black',
    team1_players: ['Bockoven', 'Jackson', 'Sam', 'Astor', 'Hernan'],
    team1_score:47,
    team2: 'White',
    team2_players: ['Mikey', 'Waltman', 'Quan', 'Joe', 'Chance'],
    team2_score:48,
    winning_team: 'White',
    player_stats: {
      'Hernan': { points: 6, '2pt_m': 3, '2pt_a': 10, '3pt_m': 0, '3pt_a': 1 },
      'Astor': { points: 17, '2pt_m': 7, '2pt_a': 8, '3pt_m': 1, '3pt_a': 3 },
      'Jackson': { points: 10, '2pt_m': 5, '2pt_a': 5, '3pt_m': 0, '3pt_a': 1 },
      'Bockoven': { points: 8, '2pt_m': 4, '2pt_a': 6, '3pt_m': 0, '3pt_a': 4 },
      'Sam': { points: 6, '2pt_m': 3, '2pt_a': 5, '3pt_m': 0, '3pt_a': 1 },
      'Joe': { points: 14, '2pt_m': 4, '2pt_a': 5, '3pt_m': 2, '3pt_a': 3 },
      'Quan': { points: 0, '2pt_m': 0, '2pt_a': 5, '3pt_m': 0, '3pt_a': 1 },
      'Waltman': { points: 10, '2pt_m': 2, '2pt_a': 3, '3pt_m': 2, '3pt_a': 6 },
      'Chance': { points: 15, '2pt_m': 6, '2pt_a': 9, '3pt_m': 1, '3pt_a': 3 },
      'Mikey': { points: 11, '2pt_m': 1, '2pt_a': 5, '3pt_m': 3, '3pt_a': 4 }
    }
  },
  // June 11th, 2025 --
  {
    date: '2025-06-11',
    team1: 'Black',
    team1_players: ['Jared', 'Mikey', 'Quan', 'Astor', 'Mason'],
    team2: 'White',
    team2_players: ['Waltman', 'Chance', 'ChrisLeger', 'Hernan', 'Sam'],
    winning_team: 'White',
    player_stats: {
      'Jared': { points: 13, '2pt_m': 5, '2pt_a': 10, '3pt_m': 1, '3pt_a': 8 },
      'Mikey': { points: 7, '2pt_m': 2, '2pt_a': 7, '3pt_m': 1, '3pt_a': 2 },
      'Quan': { points: 4, '2pt_m': 2, '2pt_a': 10, '3pt_m': 0, '3pt_a': 0 },
      'Astor': { points: 12, '2pt_m': 6, '2pt_a': 12, '3pt_m': 0, '3pt_a': 3 },
      'Mason': { points: 19, '2pt_m': 8, '2pt_a': 15, '3pt_m': 1, '3pt_a': 8 },
      'Waltman': { points: 8, '2pt_m': 1, '2pt_a': 1, '3pt_m': 2, '3pt_a': 7 },
      'Chance': { points: 12, '2pt_m': 6, '2pt_a': 15, '3pt_m': 0, '3pt_a': 2 },
      'ChrisLeger': { points: 25, '2pt_m': 5, '2pt_a': 7, '3pt_m': 5, '3pt_a': 9 },
      'Hernan': { points: 2, '2pt_m': 1, '2pt_a': 8, '3pt_m': 0, '3pt_a': 3 },
      'Sam': { points: 0, '2pt_m': 6, '2pt_a': 9, '3pt_m': 0, '3pt_a': 1 }
    }
  },
  // June 12th 2025 -- 
  {
    date: '2025-06-12',
    team1: 'Black',
    team1_players: ['Jackson', 'Hernan', 'Jean', 'Nefty'],
    team2: 'White',
    team2_players: ['Roberto', 'Mikey', 'Scott', 'Paolo'],
    winning_team: 'Black'
  },
  // June 16 2025 Black 17 - 32 White
  {
    date: '2025-06-16',
    team1: 'Black',
    team1_players: ['Jackson', 'Mikey', 'Quan', 'ChrisLeger', 'Paolo'],
    team1_score:17,
    team2: 'White',
    team2_players: ['Hernan', 'Waltman', 'Jean', 'Nefty', 'Denny'],
    team2_score:32,
    winning_team: 'White'
  },
  // June 18 2025 Black 26 - White 27
  {
    date: '2025-06-18',
    team1: 'Black',
    team1_players: ['Jackson', 'Joe', 'Mikey', 'Bockoven', 'Scott'],
    team1_score: 26,
    team2: 'White',
    team2_players: ['Greg', 'Waltman', 'Jean', 'Nefty', 'Hernan'],
    team2_score: 27,
    winning_team: 'Black'
  },
  // June 19 2025 Black 26 - White 24
  {
    date: '2025-06-19',
    team1: 'Black',
    team1_players: ['Jackson', 'Jean', 'Matt', 'Trace', 'Mason'],
    team1_score: 26,
    team2: 'White',
    team2_players: ['Bockoven', 'Waltman', 'Mikey', 'Joe', 'Hernan'],
    team2_score: 24,
    winning_team: 'Black'
  },
  // June 20 2025 Black 24 - White 27
  {
    date: '2025-06-20',
    team1: 'Black',
    team1_players: ['Jared', 'Trace', 'Mason', 'Nefty', 'Astor'],
    team1_score: 24,
    team2: 'White',
    team2_players: ['Jackson', 'Jean', 'Joe', 'Hernan', 'Mikey'],
    team2_score: 27,
    winning_team: 'White'
  },
  // June 23 2025 Black 18 - White 31
  {
    date: '2025-06-23',
    team1: 'Black',
    team1_players: ['ChrisLeger', 'Quan', 'Roberto', 'Hernan', 'Astor'],
    team1_score:18, 
    team2: 'White',
    team2_players: ['Jackson', 'Jean', 'Joe', 'Paolo', 'Mikey'],
    team2_score: 31,
    winning_team: 'White'
  },
  {
    team1: 'Black',
    team1_players: ['Paolo', 'Denny', 'Landon', 'Waltman', 'Nefty'],
    team2: 'White',
    team2_players: ['Jackson', 'ChrisLeger', 'Sam', 'Roberto', 'Quan'],
    winning_team: 'White'
  },
  // July 1, 2025 
  {
    date: '2025-07-01',
    team1: 'Black',
    team1_players: ['Joe', 'Denny', 'Landon', 'Waltman', 'Nefty'],
    team2: 'White',
    team2_players: ['Jackson', 'ChrisLeger', 'Paolo', 'Roberto', 'Quan'],
    winning_team: 'Black'
  },
  // July 3, 2025 
  {
    date: '2025-07-03',
    team1: 'Black',
    team1_players: ['Joe', 'Roberto', 'Nefty', 'Hernan', 'Mikey'],
    team2: 'White',
    team2_players: ['Jackson', 'Paolo', 'Waltman', 'Quan', 'Bockoven'],
    winning_team: 'White'
  },
  // july 7 2025 Black 31 - 37 White
  {
    date: '2025-07-07',
    team1: 'Black',
    team1_players: ['Joe', 'Waltman', 'Bockoven', 'Hernan', 'Nefty'],
    team1_score: 31,
    team2: 'White',
    team2_players: ['Jackson', 'Paolo', 'Sam', 'Quan', 'Roberto'],
    team2_score: 37,
    winning_team: 'White'
  },
  // july 8 2025 Black 27 - 26 White
  {
    date: '2025-07-08',
    team1: 'Black',
    team1_players: ['Joe', 'Jackson', 'Mikey', 'Hernan', 'Bockoven'],
    team1_score:27,
    team2: 'White',
    team2_players: ['Chance', 'Paolo', 'Waltman', 'Quan', 'ChrisLeger'],
    team2_score:26,
    winning_team: 'Black'
  },
  {
    team1: 'Black',
    team1_players: ['Joe', 'Jackson', 'Mikey', 'Quan', 'Paolo'],
    team2: 'White',
    team2_players: ['Landon', 'Bockoven', 'Jared', 'Hernan', 'Scott'],
    winning_team: 'White'
  },
  {
    team1: 'Black',
    team1_players: ['Hernan', 'Roberto', 'Leger', 'Bockoven', 'ChrisMolder'],
    team2: 'White',
    team2_players: ['Sam', 'Chance', 'Quan', 'Mikey', 'Waltman'],
    winning_team: 'White'
  },
  {
    team1: 'Black',
    team1_players: ['Joe', 'Matt', 'Trace', 'Mason', 'Sawyer'],
    team2: 'White',
    team2_players: ['Sam', 'Chance', 'Jackson', 'Hernan', 'Mikey'],
    winning_team: 'White'
  },
  // July 24 Black 27 - 29 White
  {
    date: '2025-07-24',
    team1: 'Black',
    team1_players: ['Bockoven', 'Mikey', 'Hernan', 'Paolo', 'Nefty'],
    team1_score: 27,
    team2: 'White',
    team2_players: ['Joe', 'Mason', 'Jackson', 'Greg', 'Sawyer'],
    team2_score:29,
    winning_team: 'White'
  },
  // July 28 Black ? - ? White
  {
    date: '2025-07-28',
    team1: 'Black',
    team1_players: ['Sawyer', 'Hernan', 'Landon', 'Paolo', 'Quan'],
    team2: 'White',
    team2_players: ['Joe', 'Roberto', 'Jackson', 'Denny', 'Mikey'],
    winning_team: 'White'
  },
  // July 29th
  {
    date: '2025-07-29',
    team1: 'Black',
    team1_players: ['Sawyer', 'Bockoven', 'Landon', 'Paolo', 'Hernan'],
    team2: 'White',
    team2_players: ['Joe', 'Roberto', 'Jackson', 'ChrisLeger', 'Mikey'],
    winning_team: 'White'
  },
  // july 30 Black 24 - 21 White
  {
    date: '2025-07-30',
    team1: 'Black',
    team1_players: ['Nefty', 'Bockoven', '', 'Mikey', 'Sam'],
    team1_score: 24,
    team2: 'White',
    team2_players: ['Joe', 'Roberto', 'Jackson', 'Landon', 'Hernan'],
    team2_score: 21,
    winning_team: 'Black'
  },
  // July 31st
  {
    date: '2025-07-31',
    team1: 'Black',
    team1_players: ['Nefty', 'Bockoven', '', 'Mikey', 'Sam'],
    team2: 'White',
    team2_players: ['Joe', 'Roberto', 'Jackson', 'Landon', 'Hernan'],
    winning_team: 'Black'
  },
  {
    team1: 'Black',
    team1_players: ['Waltman', 'Chance', 'Hernan', 'Greg', 'Quan'],
    team2: 'White',
    team2_players: ['Joe', 'Scott', 'Jackson', 'Mason', 'Mikey'],
    winning_team: 'White'
  },
  // August 4th Black 24 - White 28
  {
    date: '2025-08-04',
    team1: 'Black',
    team1_players: ['Joe', 'Jackson', 'Mikey', 'Sawyer', 'Paolo'],
    team1_score: 24,
    team2: 'White',
    team2_players: ['Hernan', 'Waltman', 'Roberto', 'Mason', 'Quan'],
    team2_score:28,
    winning_team: 'White'
  },
  // August 6th Black 29 - White 28
  {
    date: '2025-08-6',
    team1: 'Black',
    team1_players: ['Sam', 'Jackson', 'Scott', 'Roberto', 'Paolo'],
    team1_score:29,
    team2: 'White',
    team2_players: ['Hernan', 'Denny', 'Sawyer', 'Nefty', 'Quan'],
    team2_score: 28,
    winning_team: 'Black'
  },
  // August 11th Black 27 - 35 White
  {
    date: '2025-08-11',
    team1: 'Black',
    team1_players: ['Mason', 'Landon', 'Paolo', 'Quan', 'Matt'],
    team1_score:27,
    team2: 'White',
    team2_players: ['Joe', 'Roberto', 'Mikey', 'Hernan', 'ChrisMolder'],
    team2_score:35,
    winning_team: 'White'
  },
  // August 12th Black 26 - 41 White
  {
    date: '2025-08-12',
    team1: 'Black',
    team1_players: ['Chance', 'ChrisLeger', 'Paolo', 'Mikey', 'Waltman'],
    team1_score:26,
    team2: 'White',
    team2_players: ['Joe', 'Roberto', 'Jackson', 'Sam', 'Hernan'],
    team2_score:41,
    winning_team: 'White'
  },
  // August 13th Black 27 - 26 White
  {
    date: '2025-08-13',
    team1: 'Black',
    team1_players: ['Jackson', 'Sam', 'ChrisMolder', 'Quan', 'Hernan'],
    team1_score: 27,
    team2: 'White',
    team2_players: ['Joe', 'Denny', 'Chance', 'Mikey', 'Waltman'],
    team2_score:26,
    winning_team: 'Black'
  },
  // September 2 Black 22 - 20 White
  {
    date: '2025-09-2',
    team1: 'Black',
    team1_players: ['Hernan', 'Sam', 'ChrisMolder', 'Paolo', 'Matt'],
    team1_score: 22,
    team2: 'White',
    team2_players: ['Jackson', 'Quan', 'Roberto', 'Mikey', 'Waltman'],
    team2_score: 20,
    winning_team: 'Black'
  },
  // September 5 Black 45 - 40 White
  {
    date: '2025-09-05',
    team1: 'Black',
    team1_players: ['Joe', 'Roberto', 'Bockoven', 'Hernan', 'Quan'],
    team1_score:45,
    team2: 'White',
    team2_players: ['Sam', 'Waltman', 'ChrisMolder', 'Mikey', 'Paolo'],
    team2_score:40,
    winning_team: 'Black',
    player_stats: {
      'Sam': { points: 10, '2pt_m': 5, '2pt_a': 8, '3pt_m': 0, '3pt_a': 1 },
      'Waltman': { points: 6, '2pt_m': 0, '2pt_a': 1, '3pt_m': 2, '3pt_a': 7 },
      'ChrisMolder': { points: 9, '2pt_m': 3, '2pt_a': 10, '3pt_m': 1, '3pt_a': 6 },
      'Mikey': { points: 11, '2pt_m': 1, '2pt_a': 3, '3pt_m': 3, '3pt_a': 5 },
      'Paolo': { points: 4, '2pt_m': 2, '2pt_a': 7, '3pt_m': 0, '3pt_a': 1 },
      'Joe': { points: 18, '2pt_m': 3, '2pt_a': 7, '3pt_m': 4, '3pt_a': 14 },
      'Roberto': { points: 6, '2pt_m': 3, '2pt_a': 4, '3pt_m': 0, '3pt_a': 4 },
      'Bockoven': { points: 5, '2pt_m': 1, '2pt_a': 4, '3pt_m': 1, '3pt_a': 7 },
      'Hernan': { points: 12, '2pt_m': 6, '2pt_a': 10, '3pt_m': 0, '3pt_a': 0 },
      'Quan': { points: 4, '2pt_m': 2, '2pt_a': 5, '3pt_m': 0, '3pt_a': 1 }
    }
  },
  // 1 20 minute speed round as photographers were here. 4v4
  {
    team1: 'Black',
    team1_players: ['Scott', 'Joe', 'Ahsanul', 'Hernan'],
    team2: 'White',
    team2_players: ['Jackson', 'Mikey', 'Bockoven', 'Landon'],
    winning_team: 'White'
  },
  // September 23 Black 26 - 27 White
  {
    date: '2025-09-23',
    team1: 'Black',
    team1_players: ['Bockoven', 'Paolo', 'Roberto', 'Landon', 'Hernan'],
    team1_score:26,
    team2: 'White',
    team2_players: ['Joe', 'Quan', 'Mikey', 'Matt', 'Waltman'],
    team2_score:27,
    winning_team: 'White'
  },
  // September 24 Black 26 - 27 White
  {
    date: '2025-09-24',
    team1: 'Black',
    team1_players: ['Waltman', 'Paolo', 'Quan', 'Hernan', 'Jared'],
    team1_score: 26,
    team2: 'White',
    team2_players: ['Joe', 'Roberto', 'Mikey', 'Nefty', 'Jackson'],
    team2_score:27,
    winning_team: 'Black'
  },
  // September 26 Black 25 - 24 White
  {
    date: '2025-09-26',
    team1: 'Black',
    team1_players: ['Jackson', 'Hernan', 'Quan', 'Roberto'],
    team1_score:25,
    team2: 'White',
    team2_players: ['Joe', 'ChrisMolder', 'Mikey', 'Nefty'],
    team2_score:24,
    winning_team: 'Black'
  },
  // September 30 Black 28 - 24 White
  {
    date: '2025-09-30',
    team1: 'Black',
    team1_players: ['Jackson', 'Joe', 'Nefty', 'Roberto'],
    team1_score:28,
    team2: 'White',
    team2_players: ['Hernan', 'ChrisMolder', 'Mikey', 'Paolo'],
    team2_score:24,
    winning_team: 'Black'
  },
  // October 7th, Black 28 - White 32
  {
    date: '2025-10-07',
    team1: 'Black',
    team1_players: ['Joe', 'Jackson', 'Waltman', 'Chance', 'Neftaly'],
    team1_score:28,
    team2: 'White',
    team2_players: ['Matt', 'ChrisLeger', 'Roberto', 'Paolo', 'Hernan'],
    team2_score:32,
    winning_team: 'White',
    player_stats: {
      'Joe': { points: 24, '2pt_m': 6, '2pt_a': 12, '3pt_m': 4, '3pt_a': 14 },
      'Jackson': { points: 4, '2pt_m': 2, '2pt_a': 6, '3pt_m': 0, '3pt_a': 0 },
      'Waltman': { points: 11, '2pt_m': 1, '2pt_a': 4, '3pt_m': 3, '3pt_a': 10 },
      'Chance': { points: 12, '2pt_m': 3, '2pt_a': 9, '3pt_m': 2, '3pt_a': 6 },
      'Neftaly': { points: 2, '2pt_m': 1, '2pt_a': 4, '3pt_m': 0, '3pt_a': 7 },
      'Hernan': { points: 8, '2pt_m': 4, '2pt_a': 5, '3pt_m': 0, '3pt_a': 3 },
      'Paolo': { points: 2, '2pt_m': 1, '2pt_a': 3, '3pt_m': 0, '3pt_a': 1 },
      'Roberto': { points: 14, '2pt_m': 4, '2pt_a': 10, '3pt_m': 2, '3pt_a': 4 },
      'ChrisLeger': { points: 15, '2pt_m': 3, '2pt_a': 8, '3pt_m': 3, '3pt_a': 12 },
      'Quan': { points: 19, '2pt_m': 8, '2pt_a': 12, '3pt_m': 1, '3pt_a': 2 }
    }
  },
  // October 10 Black 19 - 12 White
  {
    date: '2025-10-10',
    team1: 'Black',
    team1_players: ['Jackson', 'Roberto', 'Nefty', 'Landon', 'Waltman'],
    team1_score:19,
    team2: 'White',
    team2_players: ['Hernan', 'Denny', 'Astor', 'Mikey', 'Quan'],
    team2_score:12,
    winning_team: 'Black'
  },
  // October 17 Black 29 - 29 White
  {
    date: '2025-10-17',
    team1: 'Black',
    team1_players: ['Jackson', 'Joe', 'Quan', 'Nefty', 'Mikey'],
    team1_score:29,
    team2: 'White',
    team2_players: ['Landon', 'Bockoven', 'Paolo', 'Scott', 'Hernan'],
    team2_score:29,
    winning_team: ''
  },
];