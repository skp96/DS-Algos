def findClosestBSTIter(tree, target):
    closestValue = tree.value
    currentNode = tree

    while currentNode is not None:
        if abs(target - currentNode.value) < abs(target - closestValue):
            closestValue = currentNode.value
        if target < currentNode.value:
            currentNode = currentNode.left
        elif target > currentNode.value:
            currentNode = currentNode.right
        else:
            break
    return closestValue

# Time Complexity: O(n)
# Space Complexity: O(1)


def findClosestBSTRecur(tree, target):
    return findClosestBSTRecurHelper(tree, target, tree.value)


def findClosestBSTRecurHelper(tree, target, closest):
    if tree is None:
        return closest

    if abs(target - tree.value) < abs(target - closest):
        closest = tree.value

    if target < tree.value:
        return findClosestBSTRecurHelper(tree.left, target, closest)
    elif target > tree.value:
        return findClosestBSTRecurHelper(tree.right, target, closest)
    else:
        return closest
