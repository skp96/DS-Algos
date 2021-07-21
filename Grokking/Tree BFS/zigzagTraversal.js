class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = (root) => {
  const result = [];
  const queue = [root];
  let leftToRight = true;

  while (queue.length > 0) {
    const currentLevel = [];
    const currLevelLength = queue.length;

    for (let i = 0; i < currLevelLength; i++) {
      const currNode = queue.shift();

      if (leftToRight) {
        currentLevel.push(currNode.value);
      } else {
        currentLevel.unshift(currNode.value)
      }

      if (currNode.left) queue.push(currNode.left)
      if (currNode.right) queue.push(currNode.right)
    }
    result.push(currentLevel);
    leftToRight = !leftToRight;
  }
  return result;
}

// Time Complexity: O(N);
// Space Complexity: O(N);