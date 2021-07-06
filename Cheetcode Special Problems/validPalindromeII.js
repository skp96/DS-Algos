const validPalindromeII = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left += 1;
      right -= 1
    } else {
      return isValidPalindrome(s, left + 1, right) || isValidPalindrome(s, left, right - 1);
    }
  }
  return true;
}

const isValidPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

// Time Complexity: O(N^2);
// Space Complexity: O(1);

console.log('true', validPalindromeII('aba'));
console.log('true', validPalindromeII('abca'));
console.log('false', validPalindromeII('abcda'));
console.log('true', validPalindromeII(''));
console.log('true', validPalindromeII('a'));
console.log('true', validPalindromeII('abcdca'));
console.log('true', validPalindromeII('acdcba'));
