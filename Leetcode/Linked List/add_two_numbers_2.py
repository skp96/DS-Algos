class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverse_linked_list(self, head):
        previous = None

        while head:
            next_node = head.next
            head.next = previous
            previous = head
            head = next_node

        previous

    def add_two_numbers_2(self, l1, l2):
        l1 = self.reverse_linked_list(l1)
        l2 = self.reverse_linked_list(l2)

        head = None
        remainder = 0

        while l1 or l2 or remainder:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0

            sum = val1 + val2 + remainder
            value = sum % 10
            remainder = sum // 10

            current_node = ListNode(value)
            current_node.next = head
            head = current_node

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        return head

# Time Complexity: O(m) + O(n) + O(m + n)
# Space Complexity: O(max(m,n))
