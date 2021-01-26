function removeDuplicates(array) {
	const my_obj = {};
	const result = [];

	for (let num of array) {
		if (!my_obj[num]) {
			my_obj[num] = true;
			result.push(num);
		}
	}
	return result;
}

const array = [ 1, 2, 9, 1, 8, 2, 4, 8, 5, 6, 9, 2 ];
console.log(removeDuplicates(array));
