const addBinary = (a,b) => {
  let carry = 0;
  let posA = a.length - 1;
  let posB = b.length - 1;
  const answer = [];

  while (posA >=0 || posB >= 0) {
    if (a[posA] === "1") {
      carry += 1;
    }

    if (b[posB] === "1") {
      carry += 1;
    }

    if (carry % 2 === 1) {
      answer.push(1)
    } else {
      answer.push(0)
    }

    carry = Math.floor(carry / 2);

    posA += 1;
    posB += 1;
  }
  if (carry === 1) {
    answer.push(1)
  }
  answer.reverse();

  return answer.join("");
}

// Time Complexity: O(max(M,N)), where M and N are the lengths of the input strings
// Space Complexity: O(max(M, N));