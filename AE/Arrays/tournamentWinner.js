const tournamentWinner = (competitions, results) => {
  let currentBestTeam = '';
  const scoreBoard = {[currentBestTeam]: 0};

  for (let i = 0; i < competitions.length; i += 1) {
    const result = results[i];
    const [homeTeam, awayTeam] = competitions[i];

    const winner = result === 1 ? homeTeam : awayTeam;

    updateScoreBoard(winner, scoreBoard, 3);

    if (scoreBoard[winner] > scoreBoard[currentBestTeam]) {
      currentBestTeam = winner;
    }
  }
  return currentBestTeam;
}

const updateScoreBoard = (winner, scoreBoard, points) => {
  if (!(winner in scoreBoard)) {
    scoreBoard[winner] = 0;
  }
  scoreBoard[winner] += points;
}

// Time Complexity: O(N);
// Space Complexity: O(K);