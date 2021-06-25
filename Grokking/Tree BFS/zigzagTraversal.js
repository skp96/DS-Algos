class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = (root) => {
  const result = []; 
  let leftToRight = true;
  const queue = [root] 

  while (queue.length > 0) {
    const queueSize = queue.length; 
    const currentLevel = []; 

    for (let i = 0; i < queueSize; i++) {
      const currNode = queue.shift();

      if (leftToRight) {
        currentLevel.push(currNode.value)
      } else {
        currentLevel.unshift(currNode.value)
      }

      if (currNode.left !== null) queue.push(currNode.left);
      if (currNode.right !== null) queue.push(currNode.right);
    }
    leftToRight = !leftToRight
    result.push(currentLevel);
  }
  return result;
}

// Time Complexity: O(N);
// Space Complexity: O(N);