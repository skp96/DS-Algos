class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const traverse = function(root) {
  if (!root) return []
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    const queueLevel = queue.length;
    const currentLevel = [];
    for (let i = 0; i < queueLevel; i++) {
      const node = queue.shift();

      currentLevel.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.unshift(currentLevel);
  }
  return result;
}

// Time Complexity: O(N);
// Space Complexity: O(N);

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)
