const fruitsIntoBasket = (fruits) => {
  const fruitBasket = {};
  let windowStart = 0;
  let maxFruitInBasket = 0;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitBasket)) {
      fruitBasket[rightFruit] = 0;
    } 
    fruitBasket[rightFruit]++

    while (Object.keys(fruitBasket).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitBasket[leftFruit]--;
      if (fruits[leftFruit] === 0) delete fruitBasket[leftFruit];
      windowStart++
    }
    maxFruitInBasket = Math.max(maxFruitInBasket, windowEnd - windowStart + 1);
  }
  return maxFruitInBasket;
}

// Time Complexity: O(N);
// Space Complexity; O(1);