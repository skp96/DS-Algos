class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}
 

const is_palindromic_linked_list = (head) => {
  if (!head || !head.next) return true;
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next
  }
  let headSecondHalf = reverseLinkedList(slow);
  let copyHeadSecondHalf = headSecondHalf;

  while (head && headSecondHalf) {
    if (head.value !== headSecondHalf.value) {
      return false;
    }
    head = head.next;
    headSecondHalf = headSecondHalf.next
  }
  reverseLinkedList(copyHeadSecondHalf);

  return true;
};


const reverseLinkedList = (head) => {
  let previous = null;
  let currNode = head;

  while(currNode) {
    let nextNode = currNode.next;
    currNode.next = previous;
    previous = currNode;
    currNode = nextNode;
  }
  return previous;
}

// Time Complexity: O(N);
// Space Complexity: O(1);