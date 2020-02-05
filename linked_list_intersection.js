// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the
// intersection of two linked lists begins, or null if there is no such
// intersection.
//
// ----------
// Example 1:
// ----------
//
// Given the following two linked lists, list1 and list2,
// linkedListIntersection(list1,list2) should return D
// as the node of intersection.
//
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ----------
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2,
// linkedListIntersection(list1, list2) should return null
// as there is no point of intersection.
//
//    A → B → C → D
//
//    X → Y → Z
//

function linkedListIntersection(list1, list2) {
	const list1Length = listLength(list1.head);
	const list2Length = listLength(list2.head);

	let diff = Math.abs(list1Length - list2Length);
	let long = list1Length >= list2Length ? list1.head : list2.head;
	let short = list1Length >= list2Length ? list2.head : list1.head;

	while (long && short) {
		if (diff > 0) {
			long = long.next;
			diff--;
			continue;
		}

		if (long === short) return long;

		long = long.next;
		short = short.next;
	}
	return null;
}

// helper function to get the length
function listLength(listNode) {
	if (listNode.next === null) return 1;

	return listLength(listNode.next) + 1;
}
