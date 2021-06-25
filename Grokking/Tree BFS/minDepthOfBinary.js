class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_minimum_depth = function(root) {
  if (!root) return 0;
  const queue = [root];
  let minDepth = 0;

  while (queue.length > 0) {
    minDepth += 1;
    const queueLen = queue.length;

    for (let i = 0; i < queueLen; i++) {
      const currNode = queue.shift();

      if (currNode.left === null && currNode.right === null) {
        return minDepth;
      }

      if (currNode.left !== null) queue.push(currNode.left);
      if (currNode.right !== null) queue.push(currNode.right);
    }
  }
};

// Time Complexity: O(N);
// Space Complexity: O(N);