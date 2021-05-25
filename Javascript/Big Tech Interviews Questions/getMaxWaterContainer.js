/*
  Problem: You're given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold
  - Initial Strategy: going to build out all possible combinations of containers and for each combination calculate the area (min(h) * width (idx2 - idx1))
    - handle edge case of input array being of size less than 2
    - init var maxArea to keep track of the max area, set value to 0 since we're searching for max value and input only contains positive inputs
    - init for loop h1
      - init for loop h2
        - calulate area --> Math.min(h[h1], h[h2]) * (h2 - h1)
        - update maxArea var if needed --> maxArea = Math.max(maxArea, calculatedArea)
    - return maxArea
*/

const getMaxWaterContainer = (heights) => {
  if (heights.length < 2) return 0;

  let maxArea = 0;

  for (let h1 = 0; h1 < heights.length; h1++) {
    for (let h2 = h1+1; h2< heights.length; h2++) {
      const calculatedArea = Math.min(heights[h1], heights[h2]) * (h2 - h1)
      maxArea = Math.max(maxArea, calculatedArea)
    }
  }
  return maxArea;
}

// Time Complexity: O(N^2), where N is the number of heights in the input array. N^2 because we are building out all possible combinations of containers
// Space Complexity: O(1)

const getMaxWaterContainerOptimal = (heights) => {
  if (heights.length < 2) return null;

  let maxArea = 0;
  let p1 = 0
  let p2 = heights.length - 1

  while (p1 < p2) {
    const calculatedArea = Math.min(heights[p1], heights[p2]) * (p2 - p1);
    maxArea = Math.max(maxArea, calculatedArea);

    if (heights[p1] < heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
}

// Time Complexity: O(H), where H is the number of heights in the input array
// Space Complexity: O(1)