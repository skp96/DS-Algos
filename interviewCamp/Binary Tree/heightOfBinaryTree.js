/*
Using the Bottom to Top Approach, we solve the problem for the left and right subtrees,
and then take the two results to solve the problem for the entire tree.
Find the height of the left and right substrees. Whichever is greater will be the maximum depth
*/


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const heightOfBinaryTree = (root) => {
  if (!root) return 0;
  return heightOfBinaryTreeHelper(root) - 1;
}

const heightOfBinaryTreeHelper = (root) => {
  if (!root) return 0;
  let heightOfLeft = heightOfBinaryTreeHelper(root.left);
  let heightOfRight = heightOfBinaryTreeHelper(root.right);

  return Math.max(heightOfLeft, heightOfRight) + 1;
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

// Time Complexity: O(N), where N is the number of nodes in the binary tree
// Space Complexity: O(H), where H is the height of the binary tree