const nextLetter = (letters, key) => {
  if (key < letters[0] || key > letters[letters.length - 1]) return letters[0];

  let start = 0; 
  let end = 0;
  
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (key < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return letters[start & letters.length];
}

// Time Complexity: O(logN);
// Space Complexity: O(1);