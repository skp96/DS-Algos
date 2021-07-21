class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

const connectAllSiblings = (root) => {
  if (root === null) return;

  const queue = [root];
  let previous = null;

  while (queue.length > 0) {
    const currNode = queue.shift();

    if (previous) {
      previous.next = currNode;
    }
    previous = currNode;

    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }
}

// Time Complexity: O(N);
// Space Complexity: O(N);