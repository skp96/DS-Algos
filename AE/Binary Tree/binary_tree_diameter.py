"""
- logic:
  - in order to solve this problem we need to determine the longest path through either the root node, or sub-root nodes
  - the diameter of a binary tree is defined as the length of the longest path, even if the path does not go through the root node
  - need to track two variables: the diameter (longest path) and the height at the current node
  - start by applying a DFS apprach where we travel, as far as possible, down one branch (DFS because we're trying to calculate the length of the longest path)
  - ultimately, we reach the last node and receive back an object containing the diameter and height, which are 0 respectively
  - this makes sense because the last node has a path and a height of 0
  - what we want to do here is build up the diameter and height
  - first we want to calculate the longest path through our root (or sub-root) by adding the height from the left node info object and right node info object
  - then want to determine the current max diameter so far by taking the max of the left node info object's diameter and the right node info object's diameter (we want to keep track of the longest path we have encountered so far)
  - then we want to determine if the path we have calculated so far is greater than the diameter (longest path) by taking the max of the two values
  - lastely, we want to update our current height by adding 1 to the max height of the left node info object's height and the right node info object's height
  - lastly we return a node info object with the new diameter and height
"""


class BST:
    def __init__(self, value):
        self.value =
        self.left = None
        self.right = None


class TreeNodeInfo:
    def __init__(self, diameter, height):
        self.diameter = diameter
        self.height = height


def binary_tree_diameter(tree):
    return get_binary_tree_diameter(tree).diameter


def get_binary_tree_diameter(tree):
    if tree is None:
        return TreeNodeInfo(0, 0)

    left_tree_node_info = get_binary_tree_diameter(tree.left)
    right_tree_node_info = get_binary_tree_diameter(tree.right)

    path_through_sub_root = left_tree_node_info.height + right_tree_node_info.height
    max_diameter_so_far = max(
        left_tree_node_info.diameter, right_tree_node_info.diameter)
    current_diameter = max(path_through_sub_root, max_diameter_so_far)
    current_height = 1 + max(eft_tree_node_info.height,
                             right_tree_node_info.height)

    return TreeNodeInfo(current_diameter, current_height)

# Time Complexity: O(n)
# Space Complexity: O(h), where h is the height of the binary tree
