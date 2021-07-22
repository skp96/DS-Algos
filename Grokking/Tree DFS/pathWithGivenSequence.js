class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



const findPath = (root, sequence) => {
  if (root === null) return sequence.length === 0;

  return findPathRecrusive(root, sequence, 0);
}

const findPathRecrusive = (currNode, sequence, sequenceIdx) => {
  if (currNode === null) return false;

  const seqLen = sequence.length;

  if (sequenceIdx >= seqLen || currNode.value !== sequence[sequenceIdx]) {
    return false
  }

  if (currNode.left === null && currNode.right === null && sequenceIdx === seqLen - 1) return true;

  return findPathRecrusive(currNode.left, sequence, sequenceIdx + 1) || findPathRecrusive(currNode.right, sequence, sequenceIdx + 1);
}

// Time Complexity: O(N);
// Space Complexity: O(N);