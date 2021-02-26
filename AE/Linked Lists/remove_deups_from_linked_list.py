"""
- input: the head of a sorted Singly Linked List
- output: return a modified version of the linked list that doesn't contain any duplicate nodes
- notes:
  - linked list should be modified in place, so cannot create a new list
  - the modified linked list should still have its nodes sorted with respect to their values
- logic:
  - need a previous_node tracker which initially is set to None --> setting to None caused an error because initially we would try to access 
    a 'value' attribute on the NoneType, which does not exist. Therefore, created a dummy linked list with a negative value.
  - the previous_node tracker will inform us if the current_node is the same as the previous node we visited
  - if so, the pointer of the previous node shouldn't point to the current_node, but to current_node.next
    - do not change the previous pointer, keep it as it is
    - change the current_node to point to current_node.next
  - else 
    - they are not duplicates and we need to keep traversing the linked list
    - set previous_node = current_node
    - and current_node = current_node.next
"""


class LinkedList:
    def __init__(self, value):
        self.value = value
        self.next = None


def remove_dups_from_linked_list(linked_list):
    head = linked_list
    current_node = linked_list
    previous_node = LinkedList(-1)

    while current_node:
        if current_node.value == previous_node.value:
            previous_node.next = current_node.next
            current_node = current_node.next
        else:
            previous_node = current_node
            current_node = current_node.next

    return head

# Time Complexity: O(n), where n is the number of nodes in the Singly Linked List
# Space Complexity: O(1)
