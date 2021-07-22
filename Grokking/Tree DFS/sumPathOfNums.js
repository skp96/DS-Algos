class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const findPath = (root, sequence) => {
  return findPathHelper(root, 0)
}

const findPathHelper = (currentNode, pathSum) => {
  if (currentNode === null) return 0;

  pathSum = 10 * pathSum + currentNode.value;

  if (currentNode.left === null && currentNode.right === null) {
    return pathSum
  };

  return findPathHelper(currentNode.left, pathSum) + findPathHelper(currentNode.right, pathSum);
}

// Time Complexity: O(N);
// Space Complexity: O(N);