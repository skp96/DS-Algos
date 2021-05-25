/*
  Problem: Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped?
  - Initial Strategy: calculate the amount of water that could be stored above a given bar --> Math.min(maxLeft, maxRight) - currentHeight
  - init a total var
  - init a for loop p 
    - deconstruct a maxLeft and maxRight by passing in p to helper function
    - calculate currentWater = Math.min(maxLeft, maxright) - currentHeight
    - if currentWater > 0 add to total
  - return total
  - Helper Function: returns an object containing maxLeft and maxRight --> takes p and length of input array as parameters
    - init two variables maxLeft and maxRight
    - init a for loop for left side
      - check each num on left to calculate maxLeft
    - init a for loop for right side
      - check each num on right to calculate maxRight
 */

const totalRainWater = (height) => {
  
  let totalRain = 0;

    for (let p = 0; p < height.length; p++) {
      let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

      while (leftP >= 0) {
        maxLeft = Math.max(maxLeft, height[leftP]);
        leftP--;
      }

      while (rightP < height.length) {
        maxRight = Math.max(maxRight, height[rightP]);
        right++;
      }

      const currentWater = Math.min(maxLeft, maxRight) - height[p]
      if (currentWater > 0) totalRain += currentWater;
    }
  return totalRain
}

// Time Complexity: O(N^2)
// Space Complexity: O(1)

const totalRainWaterOptimal = (height) => {
  let totalRain = 0, left = 0, right = height.length - 1, maxLeft = 0, maxRight = 0;

  while (left < right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        totalRain += maxLeft - height[left];
      } 
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        totalRain += maxRight - height[right];
      }
      right--;
    }
  }
  return totalRain;
}

// Time Complexity: O(N), where N is the total number of heights in the input array
// Space Complexity: O(1)