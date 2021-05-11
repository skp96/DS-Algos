class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}


const is_palindromic_linked_list = (head) => {
  let slow = head;
  let fast = head;
  
  while ((fast !== null && fast.next !== null)) {
    fast = fast.next.next
    slow = slow.next
  }
  let secondHalfHead = reverseLinkedList(slow);
  let copySecondHead = secondHalfHead;

  while ((head !== null && secondHalfHead !== null)) {
    if (head.value !== secondHalfHead.value) {
      reverseLinkedList(copySecondHead);
      return false;
    }
    head = head.next
    secondHalfHead = secondHalfHead.next
  }
  reverseLinkedList(copySecondHead);
  return true;
};


const reverseLinkedList = (head) => {
  let previousNode = null;

  while (head) {
    next = head.next
    head.next = previousNode
    previousNode = head
    head = next
  }
  return previousNode
}