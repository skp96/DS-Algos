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

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      cycleLength = calculateCycleLength(slow);
      break
    }
  }
  return findCycleStart(cycleLength, head);
}

const calculateCycleLength = (slow) => {
  let currPointer = slow;
  let length = 0;

  while(true) {
    currPointer = currPointer.next;
    length += 1;
    if (currPointer === slow) break;
  }
  return length;
}

const findCycleStart = (head, cycle_length) => {
  let fast = head;
  let slow = head;

  while (cycleLength > 0) {
    fast = fast.next
    cycleLength -= 1;
  }

  while(fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
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