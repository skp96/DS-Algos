"""
- input:
  - Binary Tree
- output:
  - sum of the nodes' depths
- notes:
  - a node's depth is the distance between the node in the Binary Tree and the tree's root node
- logic:
  - recursive solution:
    - base case, if node is None return 0
    - starting at the root node, our depth would be 0
    - we then want to add to the depth, the result from recursively calling the function on node.left and node.right
    - NOTE that with each recurisive call, we are travelling down a level in the tree, so increment depth by 1
  - iterative solution:
    - BFS approach so use a queue
    - init a queue that will hold an object {node: root, depth: 0}
    - init a variable to keep track of sum of depth 
    - while the length of the stack is greater than 0
      - pop off the object from the stack and extrapolate node and depth keys
      - if the node is None, continue with the iteration
      - add depth to sum_of_depth_variable
      - append {node: node.left, depth: depther + 1} and {node: node.rigth, depth: depther + 1}
    - return sum_of_depth
"""


class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def node_depths(root):
    return node_depths_recur(root, depth=0)


def node_depths_recur(root, depth):
    if root is None:
        return 0

    return depth + node_depths_recur(root.left, depth+1) + node_depths_recur(root.right, depth+1)

# Time Complexity: O(n), where n is the number of nodes in the Binary Tree
# Space Complexity: O(h), where h is the height of the Binary Tree


def node_depths2.0(root):
    queue = [{"node": root, "depth": 0}]
    sum_of_depths = 0

    while len(queue) > 0:
        node_info = queue.pop()
        node, depth = node_info["node"], node_info["depth"]

        if node is None:
            continue

        sum_of_depths += depth
        queue.append({"node": node.left, "depth": depth + 1})
        queue.append({"node": node.right, "depth": depth + 1})

    return sum_of_depths

# Time Complexity: O(n), where n is the number of nodes in the Binary Tree
# Space Complexity: O(h), where h is the height of the Binary Tree
