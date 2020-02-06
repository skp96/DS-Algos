// ============================================================================
// Interview Problem: Design and Implement an LRU Cache
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Given the implementation of a Doubly Linked List, design and implement
// an LRU, or Least Recently Used, cache.
//
// ------------
// Explanation:
// ------------
//
// An LRU Cache is a data structure valued for its constant time read and write
// operations. Its methods, get(key) and set(key, val), are both O(1), just
// like a Hash Table.
//
// However, unlike a Hash Table, instead of re-sizing once it reaches its
// maximum capacity for stored items, it instead removes the least recently
// used item from the cache, also in O(1) time.
//
// NOTE: We determine the item that is "Least Recently Used" by its most-recent
// "get" time, not just by its creation time!
//
// --------
// Example:
// --------
//
// const lruCache = new LRUCache(4);   => limit of 4 items
// lruCache.set('a', 'A');
// lruCache.set('b', 'B');
// lruCache.set('c', 'C');
// lruCache.set('d', 'D');
// lruCache.set('e', 'E');
//
// lruCache.get('c')                   => 'C'
// lruCache.get('b')                   => 'B'
//
// Item 'a' was removed because it was the oldest item by insertion/usage
//
// lruCache.get('a')                   => null
//
// Next, item 'e' is removed to make room, because it is the oldest by usage,
// which takes priority.
//
// lruCache.set('f', 'F');
//
// Item 'd' is also removed, because it was retrieved before item 'b' was
// last retrieved.
//
// lruCache.set('g', G);
//
const { List } = require('./doubly_linked_list');

class LRUCacheItem {
	constructor(val = null, key = null) {
		this.val = val;
		this.key = key;
		this.node = null;
	}
}

class LRUCashe {
	constructor(limit) {
		this.items = {};
		this.ordering = new List();
		this.limit = limit;
		this.length = 0;
	}

	size() {
		return this.length;
	}

	get(key) {
		if (!this.items[key]) return null;

		const item = this.items[key];
		this.promote(item);

		return item;
	}

	set(key, val) {
		let item;

		//Set value for an existing item
		if (this.item[key]) {
			item = this.item[key];
			item.val = val;
			this.promote(item);

			//Else set a new item
		} else {
			//Make space if necessary
			if (this.ifFull()) this.prune();

			item = new LRUCacheItem(val, key);
			item.node = this.ordering.unshift(item);
			this.items[key] = item;
			this.length += 1;
		}
	}

	isFull() {
		return this.length >= this.limit;
	}

	prune() {
		const oldest = this.ordering.pop();
		delete this.items[oldest.key];
		this.length--;
	}

	promote(item) {
		this.ordering.moveToFront(item);
	}
}
