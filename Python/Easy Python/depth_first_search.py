class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearchRecur(self, array):
        array.append(self.name)

        for child in self.children:
            child.depthFirstSearch(array)

        return array

    def depthFirstSearchIter(self, array):
        stack = [self]

        while len(stack) > 0:
            node = stack.pop(0)

            array.append(node.name)

            if len(node.children) > 0:
                stack = node.children + stack

        return array

# Time Complexity O(v + e)
# Space Complexity O(v)
