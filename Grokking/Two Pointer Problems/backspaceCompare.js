const backspaceCompare = (str1, str2) => {
  //use two pointers to compare strings

  let idx1 = str1.length - 1;
  let idx2 = str2.length - 1;

  while (idx1 >= 0 || idx2 >= 0) {
    //call helper function to get valid char

    let validIdx1 = getNextValidCharIdx(str1, idx1);
    let validIdx2 = getNextValidCharIdx(str2, idx2);

    if (validIdx1 < 0 && validIdx2 < 0) { // reached end of both the strings
      return true
    }

    if (validIdx1 < 0 || validIdx2 < 0) { // reached the end of one string
      return false
    }

    if (str1[validIdx1] !== str2[validIdx2]) {
      return false
    }

    idx1 = validIdx1 - 1;
    idx2 = validIdx2 - 1;
  }
  return true;
}

const getNextValidCharIdx = (str, idx) => {
  let backSpaceCount = 0;

  while (idx >= 0) {
    if (str[idx] === "#") { // found backspace character
      backSpaceCount += 1;
    } else if (backSpaceCount > 0) { // found a non-backspace character
      backSpaceCount -= 1
    } else {
      break; // no need to backspace anymore
    }

    idx -= 1; //skip backspace or a valid character
  }
  return idx;
}

// Time Complexity: O(N + M);
// Space Complexity: O(1);