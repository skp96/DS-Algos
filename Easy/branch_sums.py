def branchSums(root):
    return branchSumsHelper(root, sum=0, list=[])


def branchSumsHelper(root, sum, list):
    sum += root.value
    if root.left == None and root.right == None:
        list.append(sum)
    else:
        if root.left:
            branchSumsHelper(root.left, sum, list)
        if root.right:
            branchSumsHelper(root.right, sum, list)
    return list

# Time Complexity: O(n)
# Space Complexity: O(n)
