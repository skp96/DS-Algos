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

  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a,b) => a.start - b.start);

  const merged = [];
  let start = intervals[0].start;
  let end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const currInterval = intervals[i];

      // Check if they overlapp
    if (currInterval.start <= end) {
      end = Math.max(currInterval.end, end)
    } else {
      // they do not overlapp
      merged.push([new Interval(start, end)]);
      start = currInterval.start
      end = currInterval.end
    }
  }
  merged.push(new Interval(start, end));
  return merged;
} 

// Time Complexity: O(nlogn + n) ==> O(nlogn)
// Space Complexity: O(n)