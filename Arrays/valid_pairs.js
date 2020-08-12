function valid_pairs(nums, k) {
	let count = 0;
	const my_obj = {};

	for (let num of nums) {
		my_obj[num] = true;
	}

	for (let num of nums) {
		if (my_obj[num + k]) {
			count++;
		} else if (my_obj[num - k]) {
			count++;
		}
		my_obj[num] = false;
	}
	return count;
}

// Time Complexity: O(n);
// Space Complexity: O(n);

const k = 1;
const nums = [ 1, 1, 1, 2 ];

// const k = 3;
// const nums = [ 1, 5, 3, 4, 2 ];
console.log(valid_pairs(nums, k));
