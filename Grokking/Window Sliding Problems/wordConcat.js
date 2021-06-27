const findWordConcat = (str, words) => {
  if (words.length === 0 || words[0].length === 0) return [];

  const wordFreq = {};

  words.forEach((word) => {
    if (!(word in wordFreq)) {
      wordFreq[word] = 0;
    }
    wordFreq[word] += 1;
  });

  const result = [];
  const wordCount = words.length;
  const wordLen = words[0].length;

  for (let i = 0; i < (str.length - wordCount * wordLen) + 1; i++) {
    const wordsSeen = {};

    for (let j = 0; j < wordCount; j++) {
      // Get the start index of the next word 
      const nextWordIdx = i + j * wordLen;
      // Get the next word in the string
      const word = str.substring(nextWordIdx, nextWordIdx + wordLen);

      // If the word is not in our hash, we don't need it; therefore, break
      if (!(word in wordFreq)) {
        break;
      }

      //Add the word to the wordsSeen hash
      if (!(word in wordsSeen)) {
        wordsSeen[word] = 0;
      }
      wordsSeen[word] += 1;

      // If the word has a higher frequency than required, we don't need to process it further
      if (wordsSeen[word] > wordFreq[word]) {
        break;
      }

      //Found all the words
      if (j + 1 === wordCount) {
      result.push(i)
      }
    }
  }
  return result;
}

// O(N * C), where N is the number of characters in the string, and C is the total number of words
// O(M + N), where M is the size of the two hashmaps, and N is the size of the resulting list