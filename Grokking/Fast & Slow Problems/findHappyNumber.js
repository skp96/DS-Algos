const findHappyNumber = (num) => {
  let fast = num;
  let slow = num;
  while (true) {
    fast = findSquare(findSquare(fast));
    slow = findSquare(slow);

    if (fast === slow) {
      break
    }
  }
  return slow === 1;
}

const findSquare = (num) => {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += (digit ** 2);
    num = Math.floor(num / 10);
  }
  return sum;
} 