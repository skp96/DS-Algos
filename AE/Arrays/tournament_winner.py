"""
- input:
  - an array of pairs representing the teams that have competed agasint each other
  - an array containing the results of each competition
- output:
  - returns the winner of the tournament - string
- notes:
  - the competition array has elements in the form of [homeTeam, awayTeam]
  - the results array contsins information about the winner of each corresponding competition in the competitions array
    - results[i] denotes the winner of competitions[i], where 1 in the results array signifies that the home team won and 0 means the away team won
  - guarenteed exactly one team will win the tournament
  - each team will compete against all other teams exactly once
  - guarenteed the tournament will always have at least two team
- Logic:
  - need to keep track of current top team so init a current_top_team variable to keep track of that --> empty string
  - also need to keep track of all the teams points so init a score dictionary
  - iterate through the competitions array with IDX
    - pull the result from the results array; results[IDX]
    - determine the winning team based on the result
    - increment the team's score in the score dictionary
    - check if the team's score after incrementing is grater than the current_top_team's score
    - if so, make the team the new current_top_team
  - return current_top_team
"""


def tournamentWinner(compeitions, results):
    current_top_team = ""
    score_board = {current_top_team: 0}

    for idx, teams in enumerate(compeitions):
        result = results[idx]
        homeTeam, awayTeam = teams

        winningTeam = homeTeam if result == 1 else awayTeam

        if winningTeam in score_board:
            score_board[winningTeam] += 3
        else:
            score_board[winningTeam] = 3

        if score_board[winningTeam] > score_board[current_top_team]:
            current_top_team = winningTeam

    return current_top_team

# Time Complexity: O(n), where n is the number of competitions
# Space Complexity: O(t), where t is the number of teams
