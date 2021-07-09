const arrayOfProductsBrute = (array) => {
  const output = new Array(array.length);

  for (let i = 0; i < array.length; i++) {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (j === i) {
        continue;
      }
      product *= array[j];
    }
    output[i] = product;
  }
  return output;
}

// Time Complexity: O(N^2);
// Space Complexity: O(1);

const arrayOfProductsOptimized = (array) => {
  const output = new Array(array.length)
  const leftProducts = new Array(array.length).fill(1);
  const rightProducts = new Array(array.length).fill(1);

  for (let i = 1; i < array.length; i++) {
    leftProducts[i] = leftProducts[i - 1] * array[i - 1];
  }

  for (let j = array.length - 2; j >=0; j--) {
    rightProducts[j] = rightProducts[j + 1] * array[j + 1];
  }

  for (let k = 0; k < array.length; k++) {
    output[k] = leftProducts[k] * rightProducts[k];
  }
  return output;
}

// Time Complexity: O(N)
// Space Complexity: O(1);

const arrayOfProductsOptimizedII = (array) => { 
  const products = new Array(array.length).fill(1);

  let leftRunningProduct = 1;

  for (let i = 0; i < array.length; i++) {
    product[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  let rightProducts = 1;
  
  // in above for loop we calculated the products left of array[j], now need to calculate the products right of array[j]
  for (let j = array.length - 1; j >= 0; j--) {
    product[j] *= rightProducts;
    rightProducts *= array[j];
  }
}

// Time Complexity: O(N);
// Space Complexity: O(1);