const insert = function(intervals, new_interval) {
  // first things first, insert the new interval into existing ones.
  let updatedIntervals = insertHelper([...intervals], new_interval);
  let merged = [];
  let start = updatedIntervals[0].start;
  let end = updatedIntervals[0].end;
  for (let i = 1; i < updatedIntervals.length; i++) {
    let currInterval = updatedIntervals[i];
    if (currInterval.start <= end) {
      end = Math.max(end, currInterval.end);
    } else {
      merged.push(new Interval(start, end));
      start = currInterval.start;
      end = currInterval.end;
    }
  }
  merged.push(new Interval(start, end));
  return merged;
};

const insertHelper = (intervals, new_interval) => {
  if (new_interval.start > intervals[intervals.length - 1].start) {
    intervals.push(new_interval);
    return intervals;
  }
  if (new_interval.start < intervals[0].start) {
    intervals.unshift(new_interval);
    return intervals;
  }
  for (let i = 0; i < intervals.length; i++) {
    if (new_interval.start >= intervals[i].start && new_interval.start <= intervals[i + 1].start) {
      intervals.splice(i + 1, 0, new_interval);
      return intervals;
    }
  }

// Time Complexity: O(N)
// Space Complexity: O(N)