const findLetterCaseStringPermutation = (str) => {
  const permutations = [];
  permutations.push(str);

  // process every character of the string one by one
  for (let i = 0; i < str.length; i++) {
    if (isNaN(parseInt(str[i], 10))) {

      const n = permutations.length; 
      for (let j = 0; j < n; j++) {
        const chars = permutations[j].split("");

        if (chars[i] === chars[i].toLowerCase()) {
          chars[i] = chars[i].toUpperCase()
        } else {
          chars[i] = chars[i].toLowerCase()
        }
        permutations.push(chars.join(""))
      }
    }
  }
  return permutations;
}

// Time Complexity: O(N * 2^N);
// Space Complexity: O(N * 2^N);

