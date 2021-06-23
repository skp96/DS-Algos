class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const traverse = function(root) {
  if (!root) return [];
  result = []; // [[9,10,5][7,12],[1]]
  const queue = [root]; // []

  while (queue.length > 0) {
    const currQueueSize = queue.length; // 3
    const currentLevel = []; // [9, 10, 5]

    for (let i = 0; i < currQueueSize; i++) { // 3 < 3 === false
      const currentNode = queue.shift(); // 5
      currentLevel.push(currentNode.value);

      if(currentNode.left !== null) queue.push(currentNode.left)
      if(currentNode.right !== null) queue.push(currentNode.right)
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
