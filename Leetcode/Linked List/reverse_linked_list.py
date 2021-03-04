class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverse_list(self, head):
        if head is None:
            return head

        previous_node = None
        current_node = head

        while current_node:
            next_node = current_node.next
            current_node.next = previous_node
            previous_node = current_node
            current_node = next_node

        return current_node

# Time Complexity: O(n)
# Space Complexity: O(1)
