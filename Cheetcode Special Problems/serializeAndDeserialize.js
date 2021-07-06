class TreeNode {
  constructor(val) {
    this.val;
    this.left = null;
    this.right = null;
  }
}

const serializeBFS = (root) => {
  const queue = [root];
  const serializedData = [];

  while (queue.length > 0) {
    const currNode = queue.shift();

    if (currNode) {
      serializedData.push(currNode.val);
      queue.push(currNode.left);
      queue.push(currNode.right)
    } else {
      serializedData.push(null)
    }
  }
  return JSON.stringify(serializedData);
}

const deserializeBFS = (data) => {
  const serializedData = JSON.parse(data);
  if (!serializedData || serializedData[0] === null) return null;

  const root = new TreeNode(serializedData[0]);
  const queue = [root];

  let i = 1;

  while (queue.length > 0 && i < serializedData.length) {
    const currNode = queue.shift();

    if (serializedData[i] !== null) {
      const leftNode = new TreeNode(serializedData[i]);
      currNode.left = leftNode;
      queue.push(leftNode);
    }
    i += 1;

    if (serializedData[i] !== null) {
      const rightNode = new TreeNode(serializedData[i]);
      currNode.right = rightNode;
      queue.push(rightNode);
    }
    i += 1;
  }
  return root;
}

// Time Complexity: O(N) for both serialize and deserialize BFS
// Space Complexity: O(N) for both serialize and deserialize BFS

const serializeDFS = (root) => {
  if (!root) return null;

  const serializedData = serializeRecur(root, [])
  return JSON.stringify(serializedData);
}

const serializeRecur = (root, serializedData) => {
  if (!root) {
    serializedData.push(null);
    return;
  }

  serializedData.push(root.val);
  serializeRecur(root.left, serializedData);
  serializeRecur(root.right, serializedData);

  return serializedData;
}

const deserializeDFS = (data) => {
  if (!data) return null
  
  const serializedData = JSON.parse(data);
  const root = deserializeRecur(serializedData);

  return root;
}

const deserializeRecur = (data) => {
  if (data[0] === null) {
    data.shift();
    return null;
  }
  const value = data.shift();
  const root = new TreeNode(value);

  root.left = deserializeRecur(data);
  root.right = deserializeRecur(data);

  return root;
}

// Time Complexity: O(N), for both serialize and deserialize DFS
// Space Complexity: O(N), for both serialize and deserialize DFS