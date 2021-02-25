class Node:
    def __init__(self, name):
        self.name = name
        self.children = []

    def add_child(self, name):
        self.children.append(Node(name))
        return self

    def depth_first_search_recur(self, array):
        array.append(self.name)

        for child in self.children:
            child.depth_first_search(array)

        return array

    def depth_first_search_iter(self, array):
        stack = [self]

        while len(stack) > 0:
            node = stack.pop(0)

            array.append(node.name)

            if len(node.children) > 0:
                stack = node.children + stack

        return array
