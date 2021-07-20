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
    }
  }
  return findCycleStart(head, cycleLength);
}

const calculateCycleLength = (slow) => {
}

const findCycleStart = (head, cycleLength) => {
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