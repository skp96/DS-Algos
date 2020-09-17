def nodeDepthsRecur(root):
    return nodeDepthsHelper(root, depth=0)


def nodeDepthsHelper(root, depth):
    if root is None:
        return 0

    return depth + nodeDepthsHelper(root.left, depth + 1) + nodeDepthsHelper(root.right, depth + 1)

# Time Complexity O(n)
# Space Complexity O(h) where h is the height of the binary tree


def nodeDepthsIter(root):
    sumOfDepth = 0
    stack = [{'node': root, 'depth': 0}]

    while len(stack) > 0:
        nodeInfo = stack.pop()
        node, depth = nodeInfo['node'], nodeInfo['depth']
        if node is None:
            continue

        sumOfDepth += depth

        stack.append({'node': node.left, 'depth': depth + 1})
        stack.append({'node': node.right, 'depth': depth + 1})

    return sumOfDepth

# Time Complexity O(n)
# Space Complexity O(n)
