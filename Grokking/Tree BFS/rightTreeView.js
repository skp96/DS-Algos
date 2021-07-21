class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const rightTreeView = (root) => {
  if (root === null) return [];
  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const currLevelLen = queue.length; 

    for (let i = 0; i < currLevelLen; i++) {
      const currNode = queue.shift();

      if (i === currLevelLen - 1) result.push(currNode.val);

      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
    }
  }
  return result;
};

// Time Complexity: O(N);
// Space Complexity: O(N);