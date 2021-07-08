const decodeString = (s) => {
  const stack = [];
  let currNum = 0;
  let currString = "";

  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    if (ele === "[") {
      stack.push(currString);
      stack.push(currNum);
      currString = ""
      currNum = 0
    } else if (ele === "]") {
      const num = stack.pop();
      const prevString = stack.pop();
      currString = prevString + (currString.repeat(num))
    } else if (!Number.isNaN(Number(ele))) {
      currNum = (currNum * 10) + Number(ele)
    } else {
      currString += ele
    }
  }

  return currString;
}

// Time Complexity: O(N * maxK^countK);
// Space Complexity: O(sum(maxK^K * N));