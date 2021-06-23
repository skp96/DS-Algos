const longestSubstringWithKDistinct = (str, k) => {
    let longest = 0;
  let windowStart = 0; 
  let letterCount = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if(!(rightChar in letterCount)) {
      letterCount[rightChar] = 0;
    }
    letterCount[rightChar] += 1

    while (Object.keys(letterCount).length > k) {
      let leftChar = str[windowStart];
      letterCount[leftChar]--
      if (letterCount[leftChar] === 0) delete letterCount[leftChar];
      windowStart++
    }
    longest = Math.max(longest, windowEnd - windowStart + 1);
  }
  return longest;
}

// Time Complexity: O(N);
// Space Complexity: O(K);
