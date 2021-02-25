"""
- input: binary tree
- output: return a LIST of branch sums ORDERED from leftmost branch sum to rightmost branch sum
- notes:
  - a Branch Sum is the sum of all values in a Binary Tree Branch
  - a Binary Tree Branch is a path of nodes in a tree that starts at the root node and ends at any leaf node
- Logic:
  - solving the problem recursively
  - need to keep track of array of branch sums and running sum at each level of branch so set default parameters branch_sums = [] and running_sum = 0
  - base case is if node is None return, because there aren't any nodes to explore and thus no values to add to the running_sum
  - add node value to sum
  - if there are no left and right values, we have reached a leaf node and want to append the running_sum to branch_sums and return
  - recursively call the function on left node and right node, passing in the running_sum and branch_sums
"""


def branch_sums(root):
    branch_sums = []
    calculate_branch_sums(root, branch_sums, running_sum=0)
    return branch_sums


def calculate_branch_sums(node, branch_sums, running_sum):
    if node is None:
        return

    new_running_sum = running_sum + node.value

    if node.left is None and node.right is None:
        branch_sums.append(new_running_sum)
        return

    calculate_branch_sums(node.left, branch_sums, new_running_sum)
    calculate_branch_sums(node.right, branch_sums, new_running_sum)

# Time Complexity: O(n), where n is the number of nodes within the Binary Tree
# Space Complexity: O(n), worse case scenario we have a skewed Binary Tree (Singly Linked List) and thus the most recursive calls you'll have on the call stack at a given time will be N recursive calls. If you have a balanced Binary Tree, average case would be that you are eliminating half of the tree with each recursive call, thus the space complexity would be O(log(n))
