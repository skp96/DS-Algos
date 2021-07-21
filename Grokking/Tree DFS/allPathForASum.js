class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findPaths = (root, sum) => {
  if (root === null) return [];
  const allPaths = [];

  findPathsHelper(root, sum, allPaths, currPath = [])

  return allPaths;
}

const findPathsHelper = (root, sum, allPaths, currPath) => {
  if (root === null) return;

  currPath.push(root.value);

  if (root.left === null && root.right === null && root.value === sum) {
    // without creating a new array for currPath, we would be mutating the currPath pushed into allPaths when removing elements below
    allPaths.push([...currPath])
  } else {
    findPathsHelper(root.left, sum - root.value, allPaths, currPath)
    findPathsHelper(root.right, sum - root.value, allPaths, currPath)
  }
  //remove last element from currPath as backtracking to the top so currPath only contains the root node
  currPath.pop();
}