/*
Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order ass they appear in the array. For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a single number in an array and the array itself are both valid subsequences of the array.

Sample Input:
array = [5,1,22,25,6,-1,,8,10]
sequence = [1,6,-1,10]

Sample Output:
true
*/

const validateSequenceNaive = (array, sequence) => {
  let seqIdx = 0;

  //Iterate through array
  for (let i = 0; i < array.length; i++) {

    //Since ordering is important, check if any number === sequence[seqIdx]
    if (array[i] === sequence[seqIdx]) {
      //found number, now search for next number
      seqIdx += 1
    }
  }

  //if seqIdx === sequence.length, sequence is a subsequence of array
  return seqIdx === sequence.length;
}

// Time Complexity: O(N);
// Space Complexity: O(1);