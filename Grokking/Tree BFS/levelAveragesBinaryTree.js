class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_level_averages = function(root) {
  let result = [];
  let queue = [root];

  while(queue.length > 0) {
    const queueLength = queue.length;
    let sum = 0;
    for (let i = 0; i < queueLength; i++) {
      const currNode = queue.shift();
      sum += currNode.value;

      if (currNode.left !== null) queue.push(currNode.left);
      if (currNode.right !== null) queue.push(currNode.right);
    }
    const average = sum / queueLength
    result.push(average);
  }
  return result;
};

// Time Complexity: O(N);
// Space Complexity: O(N);