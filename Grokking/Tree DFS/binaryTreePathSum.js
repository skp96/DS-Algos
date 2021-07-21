class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const has_path = function(root, sum) {
  return hasPathHelper(root, sum)
};

const hasPathHelper = (root, sum) => {
  if (root === null) return false;

  if (root.left === null && root.right === null && root.value === sum) return true;

  sum = sum - root.value;

  return hasPathHelper(root.left, sum) || hasPathHelper(root.right, sum);
}

// Time Complexity: O(N);
// Space Complexity: O(N);