const longestConsecutive = (array) => {
  if (array.length === 0) return 0;

  array.sort((a,b) => a - b);

  let longestStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i-1]) {
      if (array[i] === array[i - 1] + 1) {
        currentStreak += 1;
      } else {
        longestStreak = Math.max(longestStreak, currentStreak)
        currentStreak = 1;
      }
    }
  }
  return Math.max(longestStreak, currentStreak);
}

// Time Complexity: O(NlogN);
// Space Complexity: O(1);