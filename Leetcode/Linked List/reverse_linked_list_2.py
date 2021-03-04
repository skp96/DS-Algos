class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def reverse_between(head, left, right):

    if head is None:
        return None

    current_node = head
    previous_node = None

    position = 1
    while position < left:
        previous_node = current_node
        current_node = current_node.next
        position += 1

    connection, tail = previous_node, current_node

    while left <= right:
        next_node = current_node.next
        current_node.next = previous_node
        previous_node = current_node
        current_node = next_node
        left += 1

    if connection:
        connection.next = previous_node
    else:
        head = previous_node

    tail.next = current_node

    return head

# Time Complexity: O(n), where n is the number of nodes in the list
# Space Complexity: O(1)
