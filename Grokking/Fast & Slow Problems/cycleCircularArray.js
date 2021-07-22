const circularArrayLoop = (arr) => {
  for (let i = 0; i < arr.length; i++ ){ //start at each index to find cycle
    const isForward = arr[i] >= 0;

    let slow = i;
    let fast = i;

    // if slow or fast become '-1' this means we cannot find a cycle for this number
    while(true) {
      // move one step for slow pointer
      slow = findNextIndex(arr, isForward, slow);

      //move one step for fast pointer
      fast = findNextIndex(arr, isForward, fast);

      if (fast !== -1) {
        // move another step for the fast pointer
        fast = findNextIndex(arr, isForward, fast);
      }

      if (slow === -1 || fast === -1 || slow === fast) {
        break;
      }
    }

    if (slow !== -1 && slow === fast) {
      return true;
    }
  }
  return false;
}


const findNextIndex = (arr, isForward, currentIndex) => {
  const direction = arr[currentIndex] >= 0

  if (isForward !== direction) return -1; //change in direction, return -1

  let nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
  if (nextIndex < 0) {
    nextIndex += arr.length // wrap around for negative numbers
  }

  if (nextIndex === currentIndex) nextIndex = -1

  return nextIndex;
}