class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) {
      return Infinity;
    }
    return this.arr[index];
  }
}


const searchInInfiniteArray = (reader, key) => {
  let start = 0;
  let end = 1;

  while (reader.get(end) < key) {
    const newStart = end + 1;
    end += (end - start + 1) * 2;

    start = newStart;
  }

  return binarySearch(reader, key, start, end); 
}

const binarySearch(reader, key, start, end) => {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2) 
      if (key < reader.get(mid)) {
        end = mid - 1;
      } else if (key > reader.get(mid)) {
        start = mid + 1;
      } else {
        return mid
      }
    }
  return - 1
}


// Time Complexity: O(logN), where in the first part, we keep increasing the bound’s size exponentially (double it every time) while searching for the proper bounds, and in the second step we perform binary search; therefore, the overall time complexity is O(logN + logN), which asymptotically is O(logN)
// Space Complexity: O(1);