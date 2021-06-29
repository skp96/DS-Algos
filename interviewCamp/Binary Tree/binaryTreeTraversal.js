class TreeNode {
  constructor(vale) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Traverse the Binary Tree inorder, postorder, and preorder
// inorder - left, root, right
// preorder - root, left, right
// postorder - left, right, root

const inorderTraversal = (root) => {
  if (!root) return;

  inorderTraversal(root.left)
  console.log(root.value);
  inorderTraversal(root.right)
}

const postOrderTraversal = (root) => {
  if (!root) return;

  postOrderTraversal(root.left);
  postOrderTraversal(root.right);
  console.log(root.value);
}

const preOrderTraversal = (root) => {
  if (!root) return;

  console.log(root.value);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

// Time Complexity: O(N), where N is the number of nodes in the Binary Tree
// Space Complexity: O(H), where H is the height (max depth) of the tree