const findHappyNumber = (num) => {
  let slow = num;
  let fast = num;

  while (true) {
    slow = findSquare(slow)
    fast = findSquare(findSquare(fast))

    if (slow === fast) {
      break
    }
  }
  return slow === 1
}

const findSquare = (num) => {
  let sum = 0

  while (num > 0) {
    let digit = num % 10
    sum += digit * digit
    num = Math.floor(num / 10)
  }
  return sum
} 