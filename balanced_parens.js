function balancedParens(str) {
	const stack = [];
	const pairs = {
		'(': ')',
		'[': ']',
		'{': '}'
	};

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (pairs[char]) {
			stack.push(char);
		} else if (char === ')' || char === ']' || char === '}') {
			if (pairs[stack.pop()] !== char) {
				return false;
			}
		}
	}
	return stack.length === 0;
}

// balancedParens('const roundDown = function(num) { return Math.floor(num) };');      => true
// balancedParens('{ array: [1, 2, [3, 4], 5], timesTwoMethod: (num) => num * 2; }');  => true
// balancedParens('function printThirdElement(array) { console.log(array[3]]] }');     => false
