class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insert = (intervals, new_interval) => {
  
  if (intervals.length < 2) {
    return intervals;
  }
  
  const merged = [];
  let i = 0;
  
  // skip and add to output all intervals that come before the new interval
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i++
  }

  // found the location of the new interval and now check for overlaps and merge with new interval
  while (i < intervals.length && intervals[i].start < new_interval.end) {
    new_interval.start = Math.min(new_interval.start, intervals[i].start);
    new_interval.end = Math.max(new_interval.end, intervals[i].end);
    i++;
  }

  // insert new interval
  merged.push(new_interval);

  // add all remaining intervals that did not overlap with new interval
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }
  return merged;
}

// Time Complexity: O(N), where N is the total number of intervals
// Space Complexity: O(N), where N is the size of the list containing all merged intervals