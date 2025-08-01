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
all_players_v3 = ['Astor', 'Bockoven', 'Chance', 'ChrisLeger', 'ChrisNorman', 'Denny', 'Greg', 'Hernan', 'Jackson', 'Jared', 'Jean', 'Joe', 'Landon', 'Matt', 'Mason', 'Mikey', 'Nefty', 'Paolo', 'Quan', 'Roberto', 'RobFriend', 'Sam', 'Sawyer', 'Scott', 'Trace', 'Waltman']
games_v3 = [
      #June2nd2025 --- Black 20 - 23 White
  {   'team1': 'Black',
      'team1_players': ['Jackson', 'Joe', 'Mikey', 'Paolo', 'Jared'],
      'team2': 'White',
      'team2_players': ['Quan', 'Roberto', 'Greg', 'Bockoven', 'Hernan'],
      'winning_team': 'White' },
      #June3rd2025 --- Black 24 - 22 White
  {   'team1': 'White',
      'team1_players': ['Jackson', 'Landon', 'Quan', 'Roberto', 'Hernan'],
      'team2': 'Black',
      'team2_players': ['Matt', 'Greg', 'Joe', 'Bockoven', 'Mikey'],
      'winning_team': 'White' },
      #June4th2025 --- Black 21 - 23 White*-
  {   'team1': 'Black',
      'team1_players': ['Landon', 'Joe', 'Jean', 'Scott', 'Mikey'],
      'team2': 'White',
      'team2_players': ['Jared', 'Nefty', 'Hernan', 'Quan', 'Waltman'],
      'winning_team': 'White' },
      #June6th2025 --- Black 25 - 27 White
  {   'team1': 'Black',
      'team1_players': ['Jared', 'Hernan', 'Jean', 'Paolo', 'Mikey'],
      'team2': 'White',
      'team2_players': ['Astor', 'Landon', 'Jackson', 'Joe', 'Mason'],
      'winning_team': 'White' },
      #June9th2025 --- Black 62 - 61 White
  {   'team1': 'Black',
      'team1_players': ['Bockoven', 'Hernan', 'Jean', 'Astor', 'ChrisLeger'],
      'team2': 'White',
      'team2_players': ['Jared', 'Waltman', 'Quan', 'Joe', 'Chance'],
      'winning_team': 'Black',
          'player_stats': {
          'Hernan': {'points': 13, '2pt_m': 5, '2pt_a': 7, '3pt_m': 1, '3pt_a': 1},
          'Jean': {'points': 8, '2pt_m': 1, '2pt_a': 7, '3pt_m': 2, '3pt_a': 6},
          'Astor': {'points': 12, '2pt_m': 6, '2pt_a': 13, '3pt_m': 0, '3pt_a': 3},
          'Bockoven': {'points': 12, '2pt_m': 0, '2pt_a': 1, '3pt_m': 4, '3pt_a': 8},
          'ChrisLeger': {'points': 17, '2pt_m': 4, '2pt_a': 7, '3pt_m': 3, '3pt_a': 12},
          'Joe': {'points': 13, '2pt_m': 5, '2pt_a': 8, '3pt_m': 1, '3pt_a': 5},
          'Quan': {'points': 2, '2pt_m': 1, '2pt_a': 6, '3pt_m': 0, '3pt_a': 1},
          'Jared': {'points': 23, '2pt_m': 7, '2pt_a': 12, '3pt_m': 3, '3pt_a': 8},
          'Waltman': {'points': 10, '2pt_m': 2, '2pt_a': 2, '3pt_m': 2, '3pt_a': 8},
          'Chance': {'points': 13, '2pt_m': 5, '2pt_a': 9, '3pt_m': 1, '3pt_a': 7}
      }
  },
      #June10th2025 --- Black 47 - 48 white
  {   'team1': 'Black',
      'team1_players': ['Bockoven', 'Jackson', 'Sam', 'Astor', 'Hernan'],
      'team2': 'White',
      'team2_players': ['Mikey', 'Waltman', 'Quan', 'Joe', 'Chance'],
      'winning_team': 'White',
          'player_stats': {
          'Hernan': {'points': 6, '2pt_m': 3, '2pt_a': 10, '3pt_m': 0, '3pt_a': 1},
          'Astor': {'points': 17, '2pt_m': 7, '2pt_a': 8, '3pt_m': 1, '3pt_a': 3},
          'Jackson': {'points': 10, '2pt_m': 5, '2pt_a': 5, '3pt_m': 0, '3pt_a': 1},
          'Bockoven': {'points': 8, '2pt_m': 4, '2pt_a': 6, '3pt_m': 0, '3pt_a': 4},
          'Sam': {'points': 6, '2pt_m': 3, '2pt_a': 5, '3pt_m': 0, '3pt_a': 1},
          'Joe': {'points': 14, '2pt_m': 4, '2pt_a': 5, '3pt_m': 2, '3pt_a': 3},
          'Quan': {'points': 0, '2pt_m': 0, '2pt_a': 5, '3pt_m': 0, '3pt_a': 1},
          'Waltman': {'points': 10, '2pt_m': 2, '2pt_a': 3, '3pt_m': 2, '3pt_a': 6},
          'Chance': {'points': 15, '2pt_m': 6, '2pt_a': 9, '3pt_m': 1, '3pt_a': 3},
          'Mikey': {'points': 11, '2pt_m': 1, '2pt_a': 5, '3pt_m': 3, '3pt_a': 4}
      }
  },
  # June 11th, 2025 --
  {   'team1': 'Black',
      'team1_players': ['Jared', 'Mikey', 'Quan', 'Astor', 'Mason'],
      'team2': 'White',
      'team2_players': ['Waltman', 'Chance', 'ChrisLeger', 'Hernan', 'Sam'],
      'winning_team': 'White',
      # 'player_stats' needs to be INSIDE the game's dictionary,
      # and its keys must be unique player names from this game.
      'player_stats': {
          'Jared': {'points': 13, '2pt_m': 5, '2pt_a': 10, '3pt_m': 1, '3pt_a': 8},
          'Mikey': {'points': 7, '2pt_m': 2, '2pt_a': 7, '3pt_m': 1, '3pt_a': 2},
          'Quan': {'points': 4, '2pt_m': 2, '2pt_a': 10, '3pt_m': 0, '3pt_a': 0},
          'Astor': {'points': 12, '2pt_m': 6, '2pt_a': 12, '3pt_m': 0, '3pt_a': 3},
          'Mason': {'points': 19, '2pt_m': 8, '2pt_a': 15, '3pt_m': 1, '3pt_a': 8},
          'Waltman': {'points': 8, '2pt_m': 1, '2pt_a': 1, '3pt_m': 2, '3pt_a': 7},
          'Chance': {'points': 12, '2pt_m': 6, '2pt_a': 15, '3pt_m': 0, '3pt_a': 2},
          'ChrisLeger': {'points': 25, '2pt_m': 5, '2pt_a': 7, '3pt_m': 5, '3pt_a': 9},
          'Hernan': {'points': 2, '2pt_m': 1, '2pt_a': 8, '3pt_m': 0, '3pt_a': 3},
          'Sam': {'points': 0, '2pt_m': 6, '2pt_a': 9, '3pt_m': 0, '3pt_a': 1}
      }
  },
      #June12th2025 -- 
  {   'team1': 'Black',
      'team1_players': ['Jackson', 'Hernan', 'Jean', 'Nefty'],
      'team2': 'White',
      'team2_players': ['Roberto', 'Mikey', 'Scott', 'Paolo'],
      'winning_team': 'Black' },
      #June162025 Black 17 - 32 White
  {   'team1': 'Black',
      'team1_players': ['Jackson', 'Mikey', 'Quan', 'ChrisLeger', 'Paolo'],
      'team2': 'White',
      'team2_players': ['Hernan', 'Waltman', 'Jean', 'Nefty', 'Denny'],
      'winning_team': 'White' },
      #June182025 Black 26 - White 27
  {   'team1': 'Black',
      'team1_players': ['Jackson', 'Joe', 'Mikey', 'Bockoven', 'Scott'],
      'team2': 'White',
      'team2_players': ['Greg', 'Waltman', 'Jean', 'Nefty', 'Hernan'],
      'winning_team': 'Black' },
      #June192025 Black 26 - White 24
  {   'team1': 'Black',
      'team1_players': ['Jackson', 'Jean', 'Matt', 'Trace', 'Mason'],
      'team2': 'White',
      'team2_players': ['Bockoven', 'Waltman', 'Mikey', 'Joe', 'Hernan'],
      'winning_team': 'Black' },
      #June202025 Black 24 - White 27
  {   'team1': 'Black',
      'team1_players': ['Jared', 'Trace', 'Mason', 'Nefty', 'Astor'],
      'team2': 'White',
      'team2_players': ['Jackson', 'Jean', 'Joe', 'Hernan', 'Mikey'],
      'winning_team': 'White' },
      #June232025 Black 18 - White 31
  {   'team1': 'Black',
      'team1_players': ['ChrisLeger', 'Quan', 'Roberto', 'Hernan', 'Astor'],
      'team2': 'White',
      'team2_players': ['Jackson', 'Jean', 'Joe', 'Paolo', 'Mikey'],
      'winning_team': 'White' },
      #
  {   'team1': 'Black',
      'team1_players': ['Paolo', 'Denny', 'Landon', 'Waltman', 'Nefty'],
      'team2': 'White',
      'team2_players': ['Jackson', 'ChrisLeger', 'Sam', 'Roberto', 'Quan'],
      'winning_team': 'White' },
      #June12025 
  {   'team1': 'Black',
      'team1_players': ['Joe', 'Denny', 'Landon', 'Waltman', 'Nefty'],
      'team2': 'White',
      'team2_players': ['Jackson', 'ChrisLeger', 'Paolo', 'Roberto', 'Quan'],
      'winning_team': 'Black' },
      #June32025 
  {   'team1': 'Black',
      'team1_players': ['Joe', 'Roberto', 'Nefty', 'Hernan', 'Mikey'],
      'team2': 'White',
      'team2_players': ['Jackson', 'Paolo', 'Waltman', 'Quan', 'Bockoven'],
      'winning_team': 'White' },
      #june7 2025 Black 31 - 37 White
  {   'team1': 'Black',
      'team1_players': ['Joe', 'Waltman', 'Bockoven', 'Hernan', 'Nefty'],
      'team2': 'White',
      'team2_players': ['Jackson', 'Paolo', 'Sam', 'Quan', 'Roberto'],
      'winning_team': 'White' },
      #june8 2025 Black 27 - 26 White
  {   'team1': 'Black',
      'team1_players': ['Joe', 'Jackson', 'Mikey', 'Hernan', 'Bockoven'],
      'team2': 'White',
      'team2_players': ['Chance', 'Paolo', 'Waltman', 'Quan', 'ChrisLeger'],
      'winning_team': 'Black' },
  {   'team1': 'Black',
      'team1_players': ['Joe', 'Jackson', 'Mikey', 'Quan', 'Paolo'],
      'team2': 'White',
      'team2_players': ['Landon', 'Bockoven', 'Jared', 'Hernan', 'Scott'],
      'winning_team': 'White' },
  {   'team1': 'Black',
      'team1_players': ['Hernan', 'Roberto', 'Leger', 'Bockoven', 'RobFriend'],
      'team2': 'White',
      'team2_players': ['Sam', 'Chance', 'Quan', 'Mikey', 'Waltman'],
      'winning_team': 'White' },
  {   'team1': 'Black',
      'team1_players': ['Joe', 'Matt', 'Trace', 'Mason', 'Sawyer'],
      'team2': 'White',
      'team2_players': ['Sam', 'Chance', 'Jackson', 'Hernan', 'Mikey'],
      'winning_team': 'White' },
      #July 24 Black 27 - 29 White
  {   'team1': 'Black',
      'team1_players': ['Bockoven', 'Mikey', 'Hernan', 'Paolo', 'Nefty'],
      'team2': 'White',
      'team2_players': ['Joe', 'Mason', 'Jackson', 'Greg', 'Sawyer'],
      'winning_team': 'White' },
      #July 28 Black ? - ? White
  {   'team1': 'Black',
      'team1_players': ['Sawyer', 'Hernan', 'Landon', 'Paolo', 'Quan'],
      'team2': 'White',
      'team2_players': ['Joe', 'Roberto', 'Jackson', 'Denny', 'Mikey'],
      'winning_team': 'White' },
  {   'team1': 'Black',
      'team1_players': ['Sawyer', 'Bockoven', 'Landon', 'Paolo', 'Hernan'],
      'team2': 'White',
      'team2_players': ['Joe', 'Roberto', 'Jackson', 'ChrisLeger', 'Mikey'],
      'winning_team': 'White' },
      #july 30 Black 24 - 21 White
  {   'team1': 'Black',
      'team1_players': ['Nefty', 'Bockoven', 'Landon', 'Mikey', 'Sam'],
      'team2': 'White',
      'team2_players': ['Joe', 'Roberto', 'Jackson', 'Landon', 'Hernan'],
      'winning_team': 'Black' },
  {   'team1': 'Black',
      'team1_players': ['Waltman', 'Chance', 'Hernan', 'Greg', 'Quan'],
      'team2': 'White',
      'team2_players': ['Joe', 'Scott', 'Jackson', 'Mason', 'Mikey'],
      'winning_team': 'White' },
]