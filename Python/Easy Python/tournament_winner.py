"""
- input: an array of pairs representing the teams that have competed against each other, and an array containing the results of each competition
  - input arrays are named competitions and results
  - the competitions array is formated as such: [homeTeam, awayTeam], where each team is a string of at most 30 characters
  - the results array contains info about the winner --> results[i] denotes the winner of compeitions[i], where 1 in the results array means the home team in the corresponding competition array won and a 0 means that the away team won
- output: returns the winner of the tournament
- notes:
  - tournament where teams of programmers compete to see who can solve algos the fastest
  - only two teams compete against each other at a time, and for each competition, one team is the home team and the other team is the away team
  - in each competition there is only one winner and one loser, meaning no ties
  - a team receives 3 points if it wines and 0 points if it losses
  - winner of the tournament is the team that receives the most points
"""


def tournament_winner(competitions, results) {
    current_best_team = ''
    score_board = {current_best_team: 0}

    for idx, teams in competitions:
    home_team, away_team = teams
    result = results[idx]

    winning_team = home_team if result == 1 else away_team

    update_score_board(winning_team, 3, score_board)

    if score_board[winning_team] > score_board[current_best_team]:
    current_best_team = winning_team

    return current_best_team
}


def update_score_board(team, points, score_board):
    if not team in score_board:
        score_board[team] = 0

    score_board[team] += points


# Time Complexity: O(3n) --> O(n), where n is the number of competitions
# Space Complexity: O(k), where k is the number of teams
