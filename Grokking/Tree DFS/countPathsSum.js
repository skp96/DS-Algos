class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const countPahts = (root, S) => {
  return countPathsRecursive(root, S, []);
}

const countPathsRecursive = (currNode, S, currPath) => {
  if (currNode === null) return 0;

  //add the current node to the path
  currPath.push(currNode.value);

  let pathCount = 0;
  let pathSum = 0;

  for (let i = currPath.length - 1; i >= 0; i--) {
    pathSum += currPath[i];

    //if the sume of any sub-path is equal to 'S' we increment our path acount
    if (pathSum === S) {
      pathCount += 1;
    }
  }

  // traverse the left sub-tree
  pathCount += countPathsRecursive(currNode.left, S, currPath);

  // traverse the right sub-tree
  pathCount += countPathsRecursive(currNode.right, S, currPath);

  // remove the current node from the path to backtrack
  // we need to remove the current node while we are going up the recursive call stack
  currPath.pop();

  return pathCount;
}

// Time Complexity: O(N^2);
// Space Complexity: O(N);