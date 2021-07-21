class TreeNode {

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null; 
  }
};


const find_successor = function(root, key) {
  const queue = [root];

  while (queue.length > 0) {
    const currNode = queue.shift();

    if (currNode.left) queue.push(currNode.left)
    if (currNode.right) queue.push(currNode.right)

    if (currNode.val === key) {
      return queue.shift();
    }
  }
  return null;
};

// Time Complexity: O(N);
// Space Complexity: O(N);