class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const locateCycleStart = (head) => {
  let fast = head;
  let slow = head;
  let cycleLength = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      cycleLength = calculateCycleLength(slow)
      break
    }
  }
  return findCycleStart(head, cycleLength);
}

const calculateCycleLength = (slow) => {
  let currNode = slow;
  let cycleLength = 0;

  while (true) {
    currNode = currNode.next;
    cycleLength += 1;

    if (currNode === slow) break;
  }
  return cycleLength;
}

const findCycleStart = (head, cycleLength) => {
  let slow = head;
  let fast = head;

  while (cycleLength > 0) {
    fast = fast.next;
    cycleLength -= 1;
  }

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}

const head = new Node(1);
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next= new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

head.next.next.next.next.next.next = head.next.next

console.log(locateCycleStart(head));

// Time Complexity: O(N)
// Space Complexity: O(1)