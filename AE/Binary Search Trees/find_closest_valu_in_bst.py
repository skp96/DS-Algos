# Easy Problem

class BST:
  __init__(self, value):
    self.value = value
    self.left = None
    self.right = None



def findClosestValueInBst(tree, target):
  closestValue = tree.value
  currentNode = tree

  while currentNode is not None:
    if abs(target - currentNode.value) < abs(target - closestValue):
      closestValue = currentNode.value
    
    if target > currentNode.value:
      currentNode = currentNode.right
    elif target < currentNode.value:
      currentNode = currentNode.left
    else:
      break

  return closestValue

# Time Complexity: O(n)
# Space Complexity: O(1)

def findClosestValueInBst2(tree, target, closest=tree.value):
  if tree is None:
    return closest

  if abs(target - tree.value) < abs(target - closest):
    closest = tree.value

  if target > tree.value:
    return findClosestValueInBst2(tree.right, target, closest)
  elif target < tree.value:
    return findClosestValueInBst2(tree.left, target, closest)
  else:
    return closest

# Time Complexity: O(n)
# Space Complexity: O(n)

