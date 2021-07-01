# Key Concepts:

* A Binary Tree is a tree where each node has at most 2 nodes
* The Depth of a node N is the number of edges from the root node to node N
* The Height of a tree is the depth of the farthest leaf node from the root (maximum depth in the tree)
* A Binary Tree with height H can have a 2^(h+1) - 1 nodes
* A Binary Tree is considered Balanced if the left and right subtrees differ in Height by at most 1

# Bottom to Top Approach:

* Using the Bottom to Top Approach, we solve the problem for the left and right subtrees,
and then take the two results to solve the problem for the entire tree.

# Top to Bottom Approach:

* Using the Top to Bottom Approach, we evaluate the result for the current node, and then pass it to the left and right nodes to evaluate for themselves. There usually is a variable that holds the result. We pass the variable(s) down to the children nodes to update. After the entire tree is traversed, the variable will hold the result