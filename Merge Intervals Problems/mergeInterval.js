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

  const mergedIntervals = [];
  let prevStart = intervals[0].start;
  let prevEnd = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const currInterval = intervals[i];
    if (currInterval.start <= prevEnd) {
      prevEnd = Math.max(currInterval.end, prevEnd);
    } else {
      mergedIntervals.push(new Interval(prevStart, prevEnd));
      prevStart = currInterval.start;
      prevEnd = currInterval.end;
    }
  }
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
};

// Time Complexity: O(NlogN + N) ===> O(NlogN)
// Space Complexity : O(N)