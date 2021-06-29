class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Calculates height based on edges, for number of nodes return maxDepth + 1;

const heightOfBinaryTree = (root) => {
  let maxDepth = 0;
  const height = (node, depth) => {
    if (!node.left && !node.right) {
      maxDepth = Math.max(maxDepth, depth);
    }
    if (node.left) height(node.left, depth + 1);
    if (node.right) height(node.right, depth + 1);
  }

  if (!root) return 0;
  height(root, 0);
  return maxDepth;
}

const root = new TreeNode("A");
root.left = new TreeNode("B");
root.left.left = new TreeNode("D");
root.left.left.left = new TreeNode("H");
root.left.right = new TreeNode("E");
root.right = new TreeNode("C");
root.right.left = new TreeNode("F");
root.right.right = new TreeNode("G");

console.log(heightOfBinaryTree(root));