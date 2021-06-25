const find_permutation = (str, pattern) => {
    const patternObj = {};
    let windowStart = 0;
    let match = 0;

    for (let i = 0; i < pattern.length; i++) {
      const char = pattern[i]
      !patternObj[char] ? patternObj[char] = 1 : patternObj[char]++
    }

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      let letter = str[windowEnd];
      if (letter in patternObj) {
        patternObj[letter]--;
      }
      if (patternObj[letter] === 0) {
        match++;
      }
      if (match === Object.keys(patternObj).length) {
        return true;
      }

      if (windowEnd >= pattern.length - 1) {
        const leftChar = str[windowStart];
        if (leftChar in patternObj) {
          if (patternObj[leftChar] === 0) {
            match--
          } 
          patternObj[leftChar]++
        }
        windowStart++
      }
    }
    return false;
}

// Time Complexity: O(N);
// Space Complexity: O(P);



let str = "odicf"
let pattern = "dc"

console.log(find_permutation(str, pattern))

