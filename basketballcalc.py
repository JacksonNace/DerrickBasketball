from data.game_data import games_v3
from data.game_data import all_players_v3

def sort_streaks(item):
    player, streak_data = item
    streak_type = streak_data['type']
    streak_length = streak_data['length']
    if streak_type == 'W':
        return (0, -streak_length)
    else:
        return (1, -streak_length)

def calculate_player_all_stats(games_data, players):
    """
    Calculates comprehensive statistics for all players based on game data.
    Includes win/loss counts, percentages, streaks, and shooting stats if available.
    """
    player_win_counts = {player: 0 for player in players}
    player_loss_counts = {player: 0 for player in players}
    player_game_counts = {player: 0 for player in players}
    player_game_history = {player: [] for player in players}
    player_total_points = {player: 0 for player in players}
    player_2pt_made = {player: 0 for player in players}
    player_2pt_attempted = {player: 0 for player in players}
    player_3pt_made = {player: 0 for player in players}
    player_3pt_attempted = {player: 0 for player in players}
    player_games_with_shooting_stats = {player: 0 for player in players}

    for game in games_data:
        team1 = game.get('team1')
        team1_players = game.get('team1_players', [])
        team2 = game.get('team2')
        team2_players = game.get('team2_players', [])
        winning_team = game.get('winning_team')

        game_player_stats = game.get('player_stats', {})

        if winning_team:
            for player in team1_players:
                if player in players: # Ensure player is in our master list
                    player_game_counts[player] += 1
                    if team1 == winning_team:
                        player_win_counts[player] += 1
                        player_game_history[player].append('W')
                    else:
                        player_loss_counts[player] += 1
                        player_game_history[player].append('L')

                    # Aggregate shooting stats if available for this player in this game
                    if player in game_player_stats:
                        player_games_with_shooting_stats[player] += 1
                        stats = game_player_stats[player]
                        player_total_points[player] += stats.get('points', 0)
                        player_2pt_made[player] += stats.get('2pt_m', 0)
                        player_2pt_attempted[player] += stats.get('2pt_a', 0)
                        player_3pt_made[player] += stats.get('3pt_m', 0)
                        player_3pt_attempted[player] += stats.get('3pt_a', 0)

            for player in team2_players:
                if player in players: # Ensure player is in our master list
                    player_game_counts[player] += 1
                    if team2 == winning_team:
                        player_win_counts[player] += 1
                        player_game_history[player].append('W')
                    else:
                        player_loss_counts[player] += 1
                        player_game_history[player].append('L')

                    # Aggregate shooting stats if available for this player in this game
                    if player in game_player_stats:
                        player_games_with_shooting_stats[player] += 1
                        stats = game_player_stats[player]
                        player_total_points[player] += stats.get('points', 0)
                        player_2pt_made[player] += stats.get('2pt_m', 0)
                        player_2pt_attempted[player] += stats.get('2pt_a', 0)
                        player_3pt_made[player] += stats.get('3pt_m', 0)
                        player_3pt_attempted[player] += stats.get('3pt_a', 0)

    all_player_stats = {}
    for player in players:
        games_played = player_game_counts.get(player, 0)
        wins = player_win_counts.get(player, 0)
        losses = player_loss_counts.get(player, 0)

        win_percentage = (wins / games_played) if games_played > 0 else 0.0

        total_points = player_total_points[player]
        total_2pt_m = player_2pt_made[player]
        total_2pt_a = player_2pt_attempted[player]
        total_3pt_m = player_3pt_made[player]
        total_3pt_a = player_3pt_attempted[player]

        ppg = (total_points / player_games_with_shooting_stats[player]) if player_games_with_shooting_stats[player] > 0 else 0.0
        _2pt_pct = (total_2pt_m / total_2pt_a) if total_2pt_a > 0 else 0.0
        _3pt_pct = (total_3pt_m / total_3pt_a) if total_3pt_a > 0 else 0.0

        # Calculate streak
        streak_info = {'length': 0, 'type': ''}
        history = player_game_history.get(player, [])
        if history:
            current_streak = 1
            streak_type = history[-1]
            for i in range(len(history) - 2, -1, -1):
                if history[i] == streak_type:
                    current_streak += 1
                else:
                    break
            if current_streak >= 3: # Only display streaks of 3 or more
                streak_info = {
                    'length': current_streak,
                    'type': streak_type
                }

        all_player_stats[player] = {
            'win_percentage': win_percentage,
            'loss_percentage': (losses / games_played) if games_played > 0 else 0.0,
            'games_played': games_played,
            'streak': streak_info,
            'ppg': ppg,
            '2pt_pct': _2pt_pct,
            '3pt_pct': _3pt_pct,
            'total_points': total_points,
            'total_2pt_made': total_2pt_m,
            'total_2pt_attempted': total_2pt_a,
            'total_3pt_made': total_3pt_m,
            'total_3pt_attempted': total_3pt_a,
            'games_with_shooting_stats': player_games_with_shooting_stats[player]
        }
    return all_player_stats

def calculate_player_vs_all_win_rates(games_data, target_player, all_players):
    """
    Calculates target_player's win percentage against every other player.
    Returns a dictionary with each opponent and win rate data.
    """
    results = {}
    
    for opponent in all_players:
        if opponent == target_player:
            continue  # Skip self
            
        # Use the existing function to get win rates
        pair_dynamics = calculate_player_pair_team_dynamics_win_percentage(games_data, target_player, opponent)
        
        # Calculate overall win rate (combining same team and opposing team games)
        total_wins = pair_dynamics['same_team']['wins'] + pair_dynamics['opposing_team']['wins']
        total_games = pair_dynamics['same_team']['games'] + pair_dynamics['opposing_team']['games']
        overall_win_rate = (total_wins / total_games) if total_games > 0 else 0.0
        
        results[opponent] = {
            'overall_win_rate': overall_win_rate,
            'total_games': total_games,
            'same_team': pair_dynamics['same_team'],
            'opposing_team': pair_dynamics['opposing_team']
        }
    
    return results

# Renamed and refactored function to be dynamic
def calculate_player_pair_team_dynamics_win_percentage(games_data, player1_name, player2_name):
    """
    Calculates player1's win percentage based on player2's team presence:
    1. When player1 and player2 are on the same team.
    2. When player1 and player2 are on opposing teams.
    Only considers games where BOTH player1 and player2 played.
    """
    player1_wins_same_team_player2 = 0
    games_same_team_player2 = 0
    player1_wins_opposing_team_player2 = 0
    games_opposing_team_player2 = 0

    for game in games_data:
        team1 = game.get('team1')
        team1_players = game.get('team1_players', [])
        team2 = game.get('team2')
        team2_players = game.get('team2_players', [])
        winning_team = game.get('winning_team')

        player1_on_team1 = player1_name in team1_players
        player1_on_team2 = player1_name in team2_players
        player2_on_team1 = player2_name in team1_players
        player2_on_team2 = player2_name in team2_players

        # CRITICAL: Only consider games where BOTH player1 and player2 played
        if (player1_on_team1 or player1_on_team2) and (player2_on_team1 or player2_on_team2):

            # Ensure a valid winning team is recorded for the game to count
            if winning_team:
                # Scenario 1: player1 and player2 are on the same team
                if (player1_on_team1 and player2_on_team1) or \
                   (player1_on_team2 and player2_on_team2):
                    games_same_team_player2 += 1
                    # Check if player1's team won
                    if (player1_on_team1 and team1 == winning_team) or \
                       (player1_on_team2 and team2 == winning_team):
                        player1_wins_same_team_player2 += 1

                # Scenario 2: player1 and player2 are on opposing teams
                elif (player1_on_team1 and player2_on_team2) or \
                     (player1_on_team2 and player2_on_team1):
                    games_opposing_team_player2 += 1
                    # Check if player1's team won
                    if (player1_on_team1 and team1 == winning_team) or \
                       (player1_on_team2 and team2 == winning_team):
                        player1_wins_opposing_team_player2 += 1

    # Calculate percentages, handling division by zero
    win_pct_same_team = (player1_wins_same_team_player2 / games_same_team_player2) \
        if games_same_team_player2 > 0 else 0.0
    win_pct_opposing_team = (player1_wins_opposing_team_player2 / games_opposing_team_player2) \
        if games_opposing_team_player2 > 0 else 0.0

    return {
        'same_team': {
            'wins': player1_wins_same_team_player2,
            'games': games_same_team_player2,
            'win_percentage': win_pct_same_team
        },
        'opposing_team': {
            'wins': player1_wins_opposing_team_player2,
            'games': games_opposing_team_player2,
            'win_percentage': win_pct_opposing_team
        }
    }

# --- Main script execution ---

player_stats_data = calculate_player_all_stats(games_v3, all_players_v3)

# Sort players for the main table
sorted_players = sorted(player_stats_data.items(),
                       key=lambda item: (item[1]['win_percentage'], item[0]), # Sort by win % then player name
                       reverse=True)

# Print spacing
for _ in range(4):
    print()

print("Player Statistics:")
print("First Game Tracked: June 2nd, 2025")
print()

# Determine column widths dynamically for better formatting
max_player_len = max(len(player) for player in all_players_v3) if all_players_v3 else 10
player_col_width = max(max_player_len, len("Player")) + 2
win_pct_width = len("Win %") + 2
games_played_width = len("Games") + 2
streak_width = len("Streak") + 2
# ppg_width = len("PPG") + 2
# pct_width = len("XX%") + 2 # For 2P% and 3P%

header = (f"{'Player':<{player_col_width}}"
         f"{'Win %':<{win_pct_width}}"
         f"{'Games':<{games_played_width}}"
         f"{'Streak':<{streak_width}}")
#          f"{'PPG':<{ppg_width}}"
#          f"{'2P%':<{pct_width}}"
#          f"{'3P%':<{pct_width}}")

print(header)
print("-" * len(header))

# Print player statistics rows
for player, stats in sorted_players:
    games_played = stats['games_played']

    # Only display players who have actually played games
    if games_played == 0:
        continue

    win_percentage_formatted = f"{stats['win_percentage'] * 100:.0f}%"

    streak_str = ""
    if stats['streak']['length'] >= 3:
        streak_str = f"{stats['streak']['length']}{stats['streak']['type']}"

    # ppg_formatted = f"{stats['ppg']:.1f}" if stats['games_with_shooting_stats'] > 0 else "N/A"
    # _2pt_pct_formatted = f"{stats['2pt_pct'] * 100:.0f}%" if stats['total_2pt_attempted'] > 0 else "N/A"
    # _3pt_pct_formatted = f"{stats['3pt_pct'] * 100:.0f}%" if stats['total_3pt_attempted'] > 0 else "N/A"

    row = (f"{player:<{player_col_width}}"
          f"{win_percentage_formatted:<{win_pct_width}}"
          f"{games_played:<{games_played_width}}"
          f"{streak_str:<{streak_width}}")
    #       f"{ppg_formatted:<{ppg_width}}"
    #       f"{_2pt_pct_formatted:<{pct_width}}"
    #       f"{_3pt_pct_formatted:<{pct_width}}")
    print(row)

# NEW SECTION: Player vs All Others
target_player = 'Bockoven'  # Change this to whatever player you want to analyze

print(f"\n\n{target_player}'s Win Rates vs All Other Players:")
print("-" * 80)

player_vs_all_data = calculate_player_vs_all_win_rates(games_v3, target_player, all_players_v3)

sorted_matchups = sorted(player_vs_all_data.items(), 
                        key=lambda x: x[1]['overall_win_rate'], 
                        reverse=True)

# Print header
opponent_col_width = max(len(player) for player in all_players_v3 if player != target_player) + 2
total_games_width = len("Total Games") + 2
same_team_width = len("Same Team") + 2
opposing_width = len("Opposing") + 2

matchup_header = (f"{'Opponent':<{opponent_col_width}}"
                 f"{'Total Games':<{total_games_width}}"
                 f"{'Same Team':<{same_team_width}}"
                 f"{'Opposing':<{opposing_width}}")

print(matchup_header)
print("-" * len(matchup_header))

# Print each matchup
for opponent, data in sorted_matchups:
    if data['total_games'] == 0:
        continue  # Skip players with no games together
    
    overall_pct = f"{data['overall_win_rate'] * 100:.0f}%"
    total_games = data['total_games']
    
    same_team_str = f"{data['same_team']['win_percentage'] * 100:.0f}% ({data['same_team']['games']})" if data['same_team']['games'] > 0 else "N/A"
    opposing_str = f"{data['opposing_team']['win_percentage'] * 100:.0f}% ({data['opposing_team']['games']})" if data['opposing_team']['games'] > 0 else "N/A"
    
    row = (f"{opponent:<{opponent_col_width}}"
          f"{total_games:<{total_games_width}}"
          f"{same_team_str:<{same_team_width}}"
          f"{opposing_str:<{opposing_width}}")
    print(row)