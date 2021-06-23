class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    result = "";
    temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};


const reverse = (head) => {
  // TODO: Write your code here
  let prev = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

// Time Complexity: O(n), where n is the number of nodes within the linked list
// Space Complexity: O(1)