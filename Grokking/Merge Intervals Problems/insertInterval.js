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
}

// Time Complexity: O(N), where N is the total number of intervals
// Space Complexity: O(N), where N is the size of the list containing all merged intervals