class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const locateCycleStart = (head) => {
  let fast = head, slow = head;
  let cycle_length = 0;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) {
      cycle_length = calculateCycleLength(slow)
      break
    }
  }
  return findCycleStart(head, cycle_length)
}

const calculateCycleLength = (slow) => {
  let current = slow, cycle_length = 0

  while (true) {
    current = current.next
    cycle_length += 1
    if (current === slow) {
      break
    }
  }
  return cycle_length
}

const findCycleStart = (head, cycle_length) => {
  let fast = head, slow = head;

  while (cycle_length > 0) {
    fast = fast.next
    cycle_length -= 1
  }

  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
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