/*
  - sort intervals in decending order
  - init first interval
  - loop through the rest
    - compare first interval to next interval
    - check if second interval.start < first interval.end (if so, they overlapp)
      - adjust end of first interval to merge --> Math.max(first interval.end, second interval.end)
    - else they don't overlapp 
      - push first interval into result array
      - first interval = second interval
    - handle last element




Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.
*/


class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  getInterval() {
    return "[" + this.start + "," + this.end + "]";
  }
}

const merge = (intervals) => {

} 

// Time Complexity: O(nlogn + n) ==> O(nlogn)
// Space Complexity: O(n)