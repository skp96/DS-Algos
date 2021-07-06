const validPalindrome = (s) => {
  s = s.replace(/[\W_]/g, "").toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

// Time Complexity: O(N), where N is the length of the input string
// Space Complexity: O(N), where N is the length of the new string created