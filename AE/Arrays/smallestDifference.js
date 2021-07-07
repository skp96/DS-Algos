const smallestDifferenceBrute = (arrayOne, arrayTwo) => {
  let result = [];
  let smallest = Infinity;

  for (let i = 0; i < arrayOne.length; i++) {
    const num1 = arrayOne[i];
    for (let j = 0; j < arrayTwo.length; j++) {
      const num2 = arrayTwo[j];

      const absoluteDiff = Math.abs(num1 - num2);

      if (absoluteDiff < smallest) {
        smallest = absoluteDiff;
        result = [num1, num2];
      }
    }
  }
  return result;
}

// Time Complexity: O(N^2);
// Space Complexity: O(1);

const smallestDifferenceOptimized = (arrayOne, arrayTwo) => {
  let result = [];
  let smallest = Infinity;

  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);

  let pointer1 = 0;
  let pointer2 = 0;

  while(pointer1 < arrayOne.length && pointer2 < arrayTwo.length) {
    const num1 = arrayOne[pointer1];
    const num2 = arrayTwo[pointer2];

    const absoluteDiff = Math.abs(num1 - num2);

    if (absoluteDiff === 0) {
      return [num1, num2]
    }

    if (absoluteDiff < smallest) {
      smallest = absoluteDiff;
      result = [num1, num2]
    }

    if (num1 < num2) {
      pointer1 += 1
    } else {
      pointer2 += 1
    }
  }
  return result;
}

// Time Complexitty: O(NlogN + MlogM);
// Space Complexity: O(1);