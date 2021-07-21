class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_level_averages = function(root) {
  result = [];
  const queue = [root];

  while (queue.length > 0) {
    const currentLevelLength = queue.length;
    let sum = 0;

    for (let i = 0; i < currentLevelLength; i++) {
      const currNode = queue.shift();
      sum += currNode.value;

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
    result.push(sum / currentLevelLength);
  }
  return result;
};

// Time Complexity: O(N);
// Space Complexity: O(N);