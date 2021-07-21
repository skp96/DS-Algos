class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_minimum_depth = function(root) {
  const queue = [root];
  let minDepth = 0;

  while (queue.length > 0) {
    minDepth += 1;
    const currLevelLen = queue.length;

    for (let i = 0; i < currLevelLen; i++) {
      const currNode = queue.shift();

      if (currNode.left === null && currNode.right === null) {
        return minDepth;
      }

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
  }
  return -1;
};

// Time Complexity: O(N);
// Space Complexity: O(N);