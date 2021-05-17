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
  if (intervals.length < 2) return true;

  intervals.sort((a,b) => a.start - b.start)

  let start = intervals[0].start
  let end = intervals[0].end

  for (let i = 1; i < intervals.length; i++) {
    let currInterval = intervals[i];

    if (currInterval.start < end) {
      return false;
    }
    start = currInterval.start;
    end = currInterval.end
  }
  return true;
};

// Time Complexity: O(nlogn)
// Space Complexity: O(n)
