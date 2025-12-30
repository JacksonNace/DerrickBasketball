'''
FORMAT
  { 'team1': 'Black',
      'team1_players': ['Jackson', 'Joe', 'Mikey', 'Paolo', 'Jared'],
      'team2': 'White',
      'team2_players': ['Quan', 'Roberto', 'Greg', 'Bockoven', 'Hernan'],
      'winning_team': 'White' },
'''

'''
# YYYY/MM/DD --- Team1 Score - Team2 Score (Example: Black 21 - 23 White)
{   'team1': 'Team1Name',
    'team1_players': ['PlayerA', 'PlayerB', 'PlayerC', 'PlayerD', 'PlayerE'],
    'team2': 'Team2Name',
    'team2_players': ['PlayerF', 'PlayerG', 'PlayerH', 'PlayerI', 'PlayerJ'],
    'winning_team': 'WinningTeamName', # Or 'team1'/'team2'
    'player_stats': {
        'PlayerA': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0},
        'PlayerB': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0},
        'PlayerC': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0},
        'PlayerD': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0},
        'PlayerE': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0},
        'PlayerF': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0},
        'PlayerG': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0},
        'PlayerH': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0},
        'PlayerI': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0},
        'PlayerJ': {'points': 0, '2pt_m': 0, '2pt_a': 0, '3pt_m': 0, '3pt_a': 0}
    }
},
'''
all_players_v3 = ['Astor', 'Ahsanul', 'Bockoven', 'Chance', 'ChrisLeger', 'ChrisNorman', 'Denny', 'Greg', 'Hernan', 'Jackson', 'Jared', 'Joe', 'Landon', 'Matt', 'Mason', 'Mikey', 'Nefty', 'Paolo', 'Quan', 'Roberto', 'Sam', 'Scott', 'Trace', 'Waltman']
games_v3 = [
  #December 8th, 2025, Black 24 - 32 White
  { 'team1': 'Black',
    'team1_players': ['Jackson', 'Quan', 'Hernan', 'Waltman', 'Chance'],
    'team2': 'White',
    'team2_players': ['Paolo', 'Roberto', 'Greg', 'Joe', 'ChrisNorman'],
    'winning_team': 'White' },
    #December 22th, 2025, Black 32 - 31 White
  { 'team1': 'Black',
    'team1_players': ['Paolo', 'ChrisNorman', 'Chance', 'ChrisLeger', 'Bockoven'],
    'team2': 'White',
    'team2_players': ['Jackson', 'Roberto', 'Joe', 'Landon', 'Quan'],
    'winning_team': 'Black' },
  #December 23rd, 2025, Black 27 - 35 White
  { 'team1': 'White',
    'team1_players': ['Joe', 'Quan', 'Landon', 'JJ', 'Roberto'],
    'team2': 'Black',
    'team2_players': ['Jared', 'Waltman', 'Chance', 'Jackson', 'ChrisNorman'],
    'winning_team': 'White' },
    #December 29th, 2025, Black 48 - 45 White
  {   'team1': 'Black',
      'team1_players': ['Hernan', 'Mason', 'Sam', 'Neftaly', 'ChrisNorman'],
      'team2': 'White',
      'team2_players': ['Joe', 'Jared', 'Waltman', 'ChrisLeger', 'Paolo'],
      'winning_team': 'Black',
          'player_stats': {
          'Hernan': {'points': 12, '2pt_m': 6, '2pt_a': 10, '3pt_m': 0, '3pt_a': 5},
          'Mason': {'points': 10, '2pt_m': 5, '2pt_a': 14, '3pt_m': 0, '3pt_a': 4},
          'Sam': {'points': 12, '2pt_m': 6, '2pt_a': 8, '3pt_m': 0, '3pt_a': 1},
          'Neftaly': {'points': 0, '2pt_m': 0, '2pt_a': 1, '3pt_m': 0, '3pt_a': 1},
          'ChrisNorman': {'points': 14, '2pt_m': 4, '2pt_a': 10, '3pt_m': 2, '3pt_a': 6},
          'Joe': {'points': 10, '2pt_m': 5, '2pt_a': 11, '3pt_m': 0, '3pt_a': 3},
          'Jared': {'points': 18, '2pt_m': 3, '2pt_a': 8, '3pt_m': 4, '3pt_a': 9},
          'Waltman': {'points': 2, '2pt_m': 1, '2pt_a': 3, '3pt_m': 0, '3pt_a': 3},
          'ChrisLeger': {'points': 10, '2pt_m': 5, '2pt_a': 10, '3pt_m': 0, '3pt_a': 5},
          'Paolo': {'points': 5, '2pt_m': 1, '2pt_a': 2, '3pt_m': 1, '3pt_a': 1}
      }
  },
]