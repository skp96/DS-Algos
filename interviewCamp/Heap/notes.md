# Heaps

* Heaps are Complete Binary Trees

* Useful in applications where you want to sort and implement priority queues
  * a priority queue is an abstract data structure similar to a regular queue or stack; however, each element has a 'priority' associated with it, such that an element with a high priority is served before an element with a low priority

* Primary purpose of heaps is to return the smallest or largest element. Time Complexity of getting the min/max value from a min/max heap is O(1)

* Heaps are typically implemented using Arrays
* Parent node can be found in the array at index position floor(idx - 1/2) 
* Left child can be found at index position 2 * idx + 1
* Right child can be found at index position 2 * idx + 2
* Last parent can be found at index position (n / 2)

## Max Heaps

* Parent >= Child in max-heaps
* Root is the greatest element
* O(1) lookup for the max element
* O(logn) for insertion
* O(logn) for deletion
* When you hear Priority Queue, think of Max Heap
* Elements are placed in nodes in the same order as they appear in the array. Then a function, Max Heapify, is called over the whole heap in a bottom-up manner that restores the Max Heap Property
  * The function is bottom-up because it starts compariing and swapping parent-chilldren from the last parent (n/2)

### Insertion in Max-Heap:

* High-level description of the Max-Heapify function:

1. Create a new child node at the end of the heap
2. Place the new key at the node
3. Compare the value with it's parent node key
4. If the key is greater than the key at the parent node, swap values
5. Repeat until you reach the root node

### Remove Max in Max Heap:

* High-level description:

1. Delete the root node
2. Move the key of the last child nocde at the last level to root
3. Now compare the key with it's children
4. If the key is smaller than the key at any of the child nodes, swap the values
5. If both keys at child nodes are greater than the parent node key, pick the larger one and see if the heap property is satisfied
6. Repeat until you reach the last level

## Min Heaps

* Parent <= Child in min-heaps
* Root is the smallest element
* O(1) lookup for the min element
* O(logn) for insertion
* O(logn) for deletion

### Insertion in Min Heap:

1. Create a new child node at the end of the heap
2. Place the new key at that node (append it to the array)
3. Percolate up until you reach the root node and the Min Heap Property is satisfied

### Remove Minimum in Min Heap

1. Delete the root node
2. Move the key of the last child node to root
3. Min Heapify down: if the key is larger than the key at any of the child nodes, swap values
4. Repeat until you reach the last node

