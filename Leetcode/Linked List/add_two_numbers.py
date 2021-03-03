"""
- input:
  - two non-empty linked lists representing two non-negative integers
- output:
  - add the two numbers and return the sum as a linked list
- logic:
  - track three variables:
    - remainder = 0
    - head = ListNode(0) --> will be returning head.next at the end
    - sum_linked_list = head --> used to construct the output linked list
  - while l1 or l2 or remainder: (even if iteration through one list is complete, still need to iterate through the larger one, and can't have a remainder)
    - sum = l1.val + l2.val + remainder
    - sum % 10 = node.val
    - sum // 10 = remainder
    - create the new node
    - before updating the output linked list pointer, set the current node's next pointer to equal the new node (sum_linked_list.next = new_node)
    - aftwards, update the output linked list pointer to point to the new_node (sum_linked_list = new_node)
    - l1 = l1.next if l1 else None
    - l2 = l2.next if l1 else None
  - return head.next
"""


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def add_two_numbers(l1, l2):
    head = ListNode(0)
    sum_linked_list = head
    remainder = 0

    while l1 or l2 or remainder:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0

        sum = val1 + val2 + remainder
        node_val = sum % 10
        remainder = sum // 10

        new_node = ListNode(node_val)
        sum_linked_list.next = new_node
        sum_linked_list = new_node

      l1 = l1.next if l1 else None
      l2 = l2.next if l2 else None

    return head.next
