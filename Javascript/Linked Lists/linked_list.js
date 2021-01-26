// TODO: Implement a Singly Linked List Node class here
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

// TODO: Implement a Singly Linked List class here
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// TODO: Implement the addToTail method here
	addToTail(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
		}
		this.tail = newNode;
		this.length++;
		return this;
	}

	// TODO: Implement the removeTail method here
	removeTail() {
		if (!this.head) return undefined;
		let currNode = this.head;
		let newTail = currNode;
		while (currNode.next) {
			newTail = currNode;
			currNode = currNode.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return currNode;
	}

	// TODO: Implement the addToHead method here
	addToHead(val) {
		let newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	// TODO: Implement the removeHead method here
	removeHead() {
		if (!this.head) return undefined;

		let currHead = this.head;
		this.head = currHead.next;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return currHead;
	}

	// TODO: Implement the contains method here
	contains(target) {
		let currNode = this.head;
		while (currNode) {
			if (currNode.value === target) return true;
			currNode = currNode.next;
		}
		return false;
	}

	// TODO: Implement the get method here
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let currNode = this.head;
		while (counter !== index) {
			currNode = currNode.next;
			counter++;
		}
		return currNode;
	}

	// TODO: Implement the set method here
	set(index, val) {
		let foundNode = this.get(index);

		if (foundNode) {
			foundNode.value = val;
			return true;
		}
		return false;
	}

	// TODO: Implement the insert method here
	insert(index, val) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) return !!this.addToHead(val);
		if (index === this.length) return !!this.addToTail(val);

		const newNode = new Node(val);
		const prevNode = this.get(index - 1);
		const temp = prevNode.next;
		prevNode.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}

	// TODO: Implement the remove method here
	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.removeHead;
		if (index === this.length) return this.removeTail;

		let prev_node = this.get(index - 1);
		let removedNode = prev_node.next;
		prev_node.next = removedNode.next;
		this.length--;
		return removedNode;
	}

	// TODO: Implement the size method here
	size() {
		return this.length;
	}
}
