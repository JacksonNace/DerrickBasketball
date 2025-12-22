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
    #December 22th, 2025, Black  White
  { 'team1': 'Black',
    'team1_players': ['Jackson', 'Quan', 'Hernan', 'Waltman', 'Chance'],
    'team2': 'White',
    'team2_players': ['Paolo', 'Roberto', 'Greg', 'Joe', 'ChrisNorman'],
    'winning_team': 'White' },
]