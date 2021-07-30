/*
Teams compete in round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other is the away team. In each competition there's always one winner and one loser; there are no ties. A team recieves 3 points if it wins and 0 points if it loses. The winner of tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other, and an array containing the results of each competition, write aa function that returns the winner of the tournament. The Competitions array has elements in the form of [homeTeam, awayTeam]. The Results array contains information about the winner of each corresponding competition in the competitions array. For example, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team won, and a 0 means that the away team won.

Guaranteed exactly one team will win, each team will compete against all other teams, and the tournament will always have at least two teams

Sample Input:
competitions = [
  ["HTML", "C#"],
  ["C#, PYTHON"],
  ["PYTHON", "HTML"]
]
result = [0,0,1]

Sample Output:
"Python"

C# beats HTML, Python beats C#, and Python beats HTML
HTML - 0 points
C# - 3 points
Python - 6 points
*/

const tournamentWinner = (competitions, results) => {
  const currentBestTeam = "";
  const scoreBoard = {[currrentBestTeam]: 0};

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i];

    const winningTeam = result === 1 ? homeTeam : awayTeam;

    updateScoreBoard(winningTeam, scoreBoard);

    if (scoreBoard[winningTeam] > scoreBoard[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

const updateScoreBoard = (winner, scoreBoard) => {
  if (!(winner in scoreBoard)) {
    scoreBoard[winner] = 0
  }
  scoreBoard[winner] += 3;
}

// Time Complexity: O(N);
// Space Complexity: O(K), where K is the number of team