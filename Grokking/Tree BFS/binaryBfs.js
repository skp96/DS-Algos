class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while(queue.length > 0) {
    const queueSize = queue.length;
    const currentLevel = [];
    for(let i = 0; i < queueSize; i++) {
      const currentNode = queue.shirt();
      currentLevel.push(currentNode.value);

      if (currentNode.left !== null) queue.push(currentNode.left)
      if (currentNode.right !== null) queue.push(currentNode.right)
    }
    result.push(currentLevel);
  }
  return result;
};

// Time Complexity: O(N);
// Space Complexity: O(N);

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);