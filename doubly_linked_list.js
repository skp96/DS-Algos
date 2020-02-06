class ListNode {
	constructor(val, prev = null, next = null) {
		this.val = val;
		this.prev = prev;
		this.next = next;
	}
	delete() {
		if (this.prev) this.prev.next = this.next;
		if (this.next) this.next.prev = this.prev;
	}
}

class List {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	//Insert at the head of the list
	unshift(val) {
		if (this.head === null && this.tail === null) {
			this.head = new ListNode(val);
			this.tail = this.head;
		} else {
			this.head = new ListNode(val, null, this.head);
			this.head.next.prev = this.head;
		}
		this.head;
	}

	// Delete at the head of the list
	shift() {
		if (this.head === null && this.tail === null) return null;
		let head = this.head;
		this.head = this.head.next;
		head.delte();
		return head.val;
	}

	// Insert at the end of the list
	push(val) {
		if (this.head === null && this.tail === null) {
			this.head = new ListNode(val);
			this.tail = this.head;
		} else {
			this.tail = new ListNode(val, this.tail, null);
			this.tail.prev.next = this.tail;
		}
		this.tail;
	}

	//Delete at the end of the list
	pop() {
		if (this.head === null && this.tail == null) return null;
		let tail = this.tail;
		this.tail = this.tail.prev;
		tail.delete();
		return tail.val;
	}

	moveToFront(node) {
		if (node === this.tail) {
			this.pop();
		} else if (node === this.head) {
			return;
		} else {
			node.delete();
		}

		node.prev = node.next = null;
		if (this.head === null && this.tail === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.head.prev = node;
			node.next = this.head;
			this.head = node;
		}
	}

	moveToEnd(node) {
		if (node === this.head) {
			this.shift();
		} else if (node === this.tail) {
			return;
		} else {
			node.delete();
		}

		node.prev = node.next = null;

		if (this.head === null && this.tail === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
	}
}
exports.List = List;
