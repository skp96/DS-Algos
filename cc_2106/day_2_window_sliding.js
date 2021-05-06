/*
- Given an array of positive numbers, and a positive number s. Find the length of the smallest contig subarrray whose sum equals is greater than or equal to s. Return 0 if no such subarray exisits
Input = [2,1,5,2,3,2], s = 7
Output = 2 (5, 2)
Notes:
  - define windowStart = 0 , windowSum = 0, smallestLength = Infinity
  - define for loop for windowEnd
    - add numbers to sum
    - while windowSum >= s
      - smallestLength = smallestLength or windowStart - windowEnd + 1
      - remove value at windowStart out of windowSum
      - increment position of windowStart
  - return smallest length
*/

// const smallestSubarray = (arr, s) => {
//   let windowStart = 0, windowSum = 0, smallestLength = Infinity

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     const rightNum = arr[windowEnd]
//     windowSum += rightNum

//     while (windowSum >= s) {
//       const leftNum = arr[windowStart]
//       smallestLength = Math.min(smallestLength, windowEnd - windowStart + 1)
//       windowSum -= leftNum
//       windowStart += 1
//     }
//   }

//   if (smallestLength === Infinity) {
//     return 0
//   }

//   return smallestLength
// }

// Time Complexity: O(N)
// Space Complexity: O(1)


// console.log(smallestSubarray([2,5,2,3,2], 7))


/*
  - Problem Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put the max number of fruits in each basket. Only restriction is that each basket can have only one type of fruit
  - You can start with any tree, but you can't skip a tree once you have started --> YOU WILL PICK UP ONE FRUIT FROM EACH TREE UNTIL YOU CANNOT, YOU WILL STOP WHEN YOU HAVE TO PICK FROM A THIRD FRUIT TYPE
  - NOTES:
    - CAN'T SELECT MORE THAN TWO DIFFERENT FRUITS
    - NEED FIGURE OUT THE MAX NUMBER OF FRUITS IN EACH BASKET 
    - USE A DICTIONARY TO KEEP TRACK OF FRUITS AND NUMBER OF FRUITS, IF DICTIOANRY HAS MORE THAN TWO DIFFERENT FRUITS, YOU RESIZE
  - PSEUDO:
    - initialize windowStart, dictionary, and maxLength
    - for loop windowEnd
      - init a rightFruit
      - add to dictionary
      - while dict > K
        - init leftFruit
        - decrement value
        - if 0 then delete
      - deteremine maxLength
    -return maxLength
*/

// const fruitsIntoBasket = (fruits) => {
//   let windowStart = 0, fruit_freq = {}, maxFruit = 0

//   for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
//     const rightFruit = fruits[windowEnd]
//     if (!(rightFruit in fruit_freq)) {
//       fruit_freq[rightFruit] = 0
//     }
//     fruit_freq[rightFruit] += 1

//     while (Object.keys(fruit_freq).length > 2) {
//       const leftChar = fruits[windowStart]
//       fruit_freq[leftChar]-- 
//       if (fruit_freq[leftChar] === 0) {
//         delete fruit_freq[leftChar]
//       }
//       windowStart += 1
//     }
//     maxFruit = Math.max(maxFruit, windowEnd - windowStart + 1)
//   }
//   return maxFruit
// }

// console.log(fruitsIntoBasket(['A', 'B', 'C', 'A', 'C']))

// const non_repeat_substring = (str) => {
//   let windowStart = 0, maxLength = 0, freq = {} //{a: 0, b: 1}, maxlen = 1, windowStart = 3

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd] // c

//     if (!(rightChar in freq)) {
//       freq[rightChar] = windowEnd
//     } else {
//       windowStart = Math.max(windowStart, freq[rightChar] + 1)
//       freq[rightChar] = windowEnd
//     }
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1); 
//   }
//   return maxLength;
// }

// console.log(non_repeat_substring('abba'))


// const lengthOfLongestSubstring = (str, k) => {
//   let longest = 0
//   let windowStart = 0
//   let maxRepeateLetterCount = 0
//   let freq = {}

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd]
//     if (!(rightChar in freq)) {
//       freq[rightChar] = 0
//     }
//     freq[rightChar] += 1
//     maxRepeateLetterCount = Math.max(maxRepeateLetterCount, freq[rightChar])

//     if ((windowEnd - windowStart + 1) - maxRepeateLetterCount > k) {
//       const leftChar = str[windowStart]
//       freq[leftChar] -= 1
//       windowStart += 1
//     }

//     longest = Math.max(longest, windowEnd - windowStart + 1)
//   }
//   return longest

// const lengthOfLongestSubarray = (arr, k) => {
//   let onesFreq = 0, maxLength = 0, windowStart = 0;

//   for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//     const num = arr[windowEnd];
//     if (num === 1) onesFreq += 1;

//     if ((windowEnd - windowStart + 1) - onesFreq > k) {
//       const leftNum = arr[windowStart];
//       if (leftNum === 1) onesFreq -= 1;
//       windowStart += 1;
//     }
//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
//   }
//   return maxLength;
// }

// // Time Complexity: O(N), where N is the number of elements in the array
// // Space Complexity: O(1)