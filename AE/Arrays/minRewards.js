// iterate through array of scores
// if scores[i] > scores[i - 1], give scores[i] one more reward than scores[i - 1]
// if scores[i] < scores[i - 1], iterate all the way back to adjust everyone's score

const minRewardsNaive = (scroes) => {
  const rewards = new Array(scores.length).fill(1);

  for (let i = 1; i < scroes.length; i++) {
    let j = i - 1;

    if (scores[i] > scores[j]) {
      rewards[i] = rewards[j] + 1
    } else {
      while (j >= 0 && scores[j] > scores[j + 1]) {
        rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
        j -= 1;
      }
    }
  }
  return rewards.reduce((a,b) => a + b);
}

// Time Complexity: O(N^2);
// Space Complexity: O(N);