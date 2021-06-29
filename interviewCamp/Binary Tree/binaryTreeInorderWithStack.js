class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.visited = false;
  }
}

const binaryTreeTraversalStack = (root) => {
  const stack = [root];

  while (stack.length > 0) {
    const currNode = stack.pop();

    if (currNode.visited) {
      console.log(currNode.value)
    } else {
      currNode.visited = true;
      if (currNode.right !== null) stack.push(currNode.right);
      
      stack.push(currNode);
      if(currNode.left !== null) stack.push(currNode.left);
    }
  }
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(6)
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

console.log(binaryTreeTraversalStack(root));

// Time Complexity: O(N), where N is the number of nodes in the binary tree
// Space Complexity: O(N), where N is the size of the stack