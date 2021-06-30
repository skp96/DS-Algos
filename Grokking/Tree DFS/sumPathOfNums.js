class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const findPath = (root, sequence) => {
  if (!root) return sequence.length === 0;

  return findPathHelper(root, sequence, 0);
}

const findPathHelper = (currentNode, sequence, sequenceIdx) => {
  if (currentNode === null) return false;

  const seqLen = sequence.length;
  if (sequenceIdx >= seqLen || currentNode.value !== sequence[sequenceIdx]) {
    return false;
  }

  if (currentNode.left === null && currentNode.right === null && sequenceIdx === seqLen - 1) {
    return true;
  }

  return findPathHelper(currentNode.left, sequence, sequenceIdx + 1) ||findPathHelper(currentNode.right, sequence, sequenceIdx + 1);
}

// Time Complexity: O(N);
// Space Complexity: O(N);