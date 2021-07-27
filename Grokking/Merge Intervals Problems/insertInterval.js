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
  const result = [];

  let i = 0;

  while (i < intervals.length && intervals[i].end < new_interval.start) {
    result.push(intervals[i]);
    i += 1;
  }

  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);

    i += 1;
  }

  result.push(new_interval);

  while(i < intervals.length) {
    result.push(intervals[i]);
    i += 1;
  }
  return result;
}

// Time Complexity: O(N), where N is the total number of intervals
// Space Complexity: O(N), where N is the size of the list containing all merged intervals