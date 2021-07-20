class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

const findMiddleOfLinkedList = (head) => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

// Time Complexity: O(N)
// Space Complexity: O(1)