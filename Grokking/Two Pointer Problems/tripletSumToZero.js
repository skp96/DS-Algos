const tripletSumToZero = (arr) => {
      const triplets = []
  arr.sort((a,b) => a-b)

  for (let i = 0; i < arr.length-2; i++) {
    let leftPointer = i + 1
    let rightPointer = arr.length - 1

    if (i > 0 && arr[i] === arr[i-1]) {
      continue;
    }

    while (leftPointer < rightPointer) {
      const sum = arr[i] + arr[leftPointer] + arr[rightPointer]
      if (sum === 0) {
        triplets.push([arr[i], arr[leftPointer], arr[rightPointer]])
        leftPointer++
        rightPointer--
        while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]) {
          leftPointer++
        }
        while (leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer + 1]) {
          rightPointer-- 
        }
      } else if (sum < 0) {
        leftPointer++
      } else {
        rightPointer--
      }
    }
  } 
  return triplets
}

// Time Complexity: O(nlogn + n^2) ---> O(n^2)
// Space Complexity: O(N)

console.log(tripletSumToZero([-5, 2, -1, -2, 3]
));