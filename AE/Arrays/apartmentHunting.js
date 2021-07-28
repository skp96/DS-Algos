const apartmentHunting = (blocks, reqs) => {
  //store the max distance to travel from block to reach a req
  const maxDistanceBlocks = new Arrary(blocks.length).fill(-Infinity);

  for (let i = 0; i < blocks.length; i++) { //iterate through blocks
    for (const req of reqs) { // for each block, iterate through all reqs
      let closestReqDistance = Infinity;

      for (let j = 0; j < blocks.length; j++) { // for each req, iterate through blocks again and calculate closest distance
        if (blocks[j][req]) {
          closestReqDistance = Math.min(closestReqDistance, distanceBetween(i, j)) // calculate the min distance a req is from block
        }
      }
      // looking for distance of a req that is farthest away from block
      maxDistanceBlooks[i] = Math.max(maxDistanceBlocks[i], closestReqDistance) 
    }
  }
  return getIdxAtMinValue(maxDistanceBlocks);
}

const distanceBetween = (a, b) => {
  return Math.abs(a - b);
}

const getIdxAtMinValue = (array) => {
  let idxAtMinValue = 0;
  let minValue = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      idxAtMinValue = i;
    }
  }
  return idxAtMinValue;
}

// Time Complexity: O(B^2R), where B is the size of the blocks array and R is the size 
// Space Complexity: O(B)