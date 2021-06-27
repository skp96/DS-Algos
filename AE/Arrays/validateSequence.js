const validateSequence = (array, sequence) => {
  let seqIdx = 0;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const seqNum = sequence[seqIdx];

    if (num === seqNum) {
      seqIdx += 1;
    }
  }
  return seqIdx === sequence.length;
}

// Time Complexity: O(N);
// Space Complexity: O(1);