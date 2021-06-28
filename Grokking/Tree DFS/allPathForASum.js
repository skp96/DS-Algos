class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findPaths = (root, sum) => {
  allPaths = [];
  findPathsHelper(root, sum, allPaths, currPath = []);
  return allPaths;
}

const findPathsHelper = (root, sum, allPaths, currPath) => {
  if (!root) return;

  //Add root value to current path
  currPath.push(root.value);

  //found a path where the nodes sum up to the given sum
  if (root.value === sum && !root.left && !root.right) {
    // without creating a new array for currPath, we would be mutating the currPath pushed into allPaths when removing elements below
    allPaths.push([...currPath]);
  } else {
  // else keep searching down the path
    findPathsHelper(root.left, sum - root.value, allPaths, currPath)
    findPathsHelper(root.right, sum - root.value, allPaths, currPath)
  }
  //remove last element from currPath as backtracking to the top so currPath only contains the root node
  currPath.pop(); 
}