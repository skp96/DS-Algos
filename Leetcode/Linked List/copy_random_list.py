class Node:
    def __init__(self, val, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random


def copy_random_list(head):

    already_created = {}

    old_node = head
    new_node = Node(old_node.val, None, None)
    already_created[old_node] = new_node

    while old_node:
        new_node.next = get_node(old_node.next, already_created)
        new_node.random = get_node(old_node.random, already_created)

        old_node = old_node.next
        new_node = new_node.next

    return already_created[head]


def get_node(node, already_created):

    if node:
        if node in already_created:
            return already_created[node]
        else:
            already_created[node] = Node(node.val, None, None)
            return already_created[node]
    return None

# Time Complexity: O(n)
# Space Complexity: O(n)
