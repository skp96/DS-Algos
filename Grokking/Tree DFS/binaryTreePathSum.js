class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const has_path = function(root, sum) {
  return hasPathHelper(root, sum, runningSum = 0)
};

const hasPathHelper = (root, sum, runningSum) => {
  if (!root) return false

  runningSum += root.value;

  if (runningSum === sum) return true;

  return hasPathHelper(root.left, sum, runningSum) || hasPathHelper(root.right, sum, runningSum);
}

// Time Complexity: O(N);
// Space Complexity: O(N);