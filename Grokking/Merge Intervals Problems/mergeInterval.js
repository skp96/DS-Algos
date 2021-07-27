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
  // sort the intervals on the start time
  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];

  // to keep track of merged intervals
  let start = intervals[0].start,
    end = intervals[0].end;
    
  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) { // overlapping intervals, adjust the 'end'
      end = Math.max(interval.end, end);
    } else { // non-overlapping interval, add the previous interval and reset
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  // add the last interval
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
} 

// Time Complexity: O(nlogn + n) ==> O(nlogn)
// Space Complexity: O(n)