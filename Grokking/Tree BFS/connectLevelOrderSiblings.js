class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

const connect_level_order_siblings = function(root) {
  const queue = [root];

  while (queue.length > 0) {
    const currLevelLen = queue.length;
    let previousNode = null;

    for (let i = 0; i < currLevelLen; i++) {
      const currNode = queue.shift();
      if (previousNode) {
        previousNode.next = currNode;
      }
      previousNode = currNode;
      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
    }
  }
};

// Time Complexity: O(N);
// Space Complexity: O(N)