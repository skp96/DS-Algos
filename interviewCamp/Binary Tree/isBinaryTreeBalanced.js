/*
Using the Bottom to Top Approach, we solve the problem for the left and right subtrees,
and then take the two results to solve the problem for the entire tree.
*/

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const isBalanced = (root) => {
  return isBalancedHelper(root) !== -1
}

const isBalancedHelper = (root) => {
  if (!root) return 0;

  const leftHeight = isBalancedHelper(root.left);
  const rightHeight = isBalancedHelper(root.right);

  if (leftHeight === -1 || rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}


const root = new TreeNode("A");
root.left = new TreeNode("B");
root.left.left = new TreeNode("D");
root.right = new TreeNode("C");

const root2 = new TreeNode("A");
root2.left = new TreeNode("B");
root2.left.left = new TreeNode("C");

console.log(isBalanced(root));
console.log(isBalanced(root2));