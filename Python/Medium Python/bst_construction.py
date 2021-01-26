class BST:
    def __init__(self, value):
      self.value = value
      self.left = None
      self.right = None

    def insert(self, value):
      currentNode = self

      while True:
        if value < currentNode.left:
          if currentNode.left is None:
            currentNode.left = BST(value)
            break
          else:
            currentNode = currentNode.left
        else:
          if currentNode.right is None:
            currentNode.right = BST(value)
            break
          else:
            currentNode = currentNode.right

      return self

    def contains(self,  value):
      currentNode = self

      while currentNode is not None:
        if value < currentNode.value:
          currentNode = currentNode.left
        elif value > currentNode.value:
          currentNode = currentNode.right
        else:
          return True
        
        return False

      pass

    def remove(self, value, parent=None):
      currentNode = self
      
      while currentNode is not None:
        if value < currentNode.value:
          parent = currentNode
          currentNode = currentNode.left
        elif value > currentNode.value:
          parent = currentNode
          currentNode = currentNode.right
        else: 
          if currentNode.left is not None and currentNode.right is not None:
            currentNode = currentNode.right.getMinValue()
            currentNode.right.remove(currentNode.value, currentNode)
          elif parent is None:
            if currentNode.left is not None:
              currentNode.value = currentNode.left.value
              currentNode.right = currentNode.left.right
              currentNode.left = currentNode.left.left
            elif currentNode.right is not None:
              currentNode.value = currentNode.right.value
              currentNode.left = currentNode.right.left
              currentNode.right = currentNode.right.right
            else:
              pass
          elif parent.left == currentNode:
            parent.left = currentNode.left if currentNode.left is not None else currentNode.right
          elif parent.right == currentNode:
            parent.right = currentNode.right if currentNode.right is not None else currentNode.left
          break
      return self

    def getMinValue(self):
      currentNode = self
      while currentNode.left is not None:
        currentNode = currentNode.left
      return currentNode.value


# Avg Time Complexity: O(logn)
# Avg Space Complexity: O(1)

# Time Complexity: O(n)
# Space Complexity: O(1)