class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const can_attend_all_appointments =  (intervals)  => {
};

// Time Complexity: O(nlogn)
// Space Complexity: O(n)
