class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def merge_two_sorted_lists(l1, l2):
    head = ListNode(-1)
    previous_node = head

    while l1 and l2:
        if l1.val <= l2.val:
            previous_node.next = l1
            l1 = l1.next
        else:
            previous_node.next = l2
            l2 = l2.next
        previous_node = previous_node.next

    previous_node.next = l1 if l1 else l2

    return head.next

# Time Complexity: O(n + m)
# Space Complexity: O(1)
