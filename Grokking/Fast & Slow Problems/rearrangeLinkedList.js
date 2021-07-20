class Node {
  constructor(value, next=null) {
    this.value = value;
    this.next = next;
  }
}

const reOrder = (head) => {
  if (head === null || head.next === null) return;

  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let headSecondHalf = reverse(slow);
  let headFirstHalf = head;

  while(headFirstHalf !== null && headSecondHalf !== null) {
    let temp = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp;

    temp = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp
  }

  if (headFirstHalf !== null) {
    headFirstHalf.next = null;
  }
}

const reverse = (head) => {
  let previous = null;

  while (head) {
    let nextNode = head.next;
    head.next = previous;
    previous = head;
    head = nextNode;
  }
  return previous;
}

// Time Complexity: O(N);
// Space Complexity: O(1);