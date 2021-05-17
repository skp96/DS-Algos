class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const merge = (intervals_a, intervals_b) => {
  let result = [];
  let i = 0
  let j = 0

  while (i < intervals_a.length && j < intervals_b.length) {
    // check if intervals overlap and a's start time lies within b's interval
    const a_overlaps_b = intervals_a[i].start >= intervals_b[j] && intervals_a[i].start <= intervals_b[j].end

    // check if intervals overlap and b's start time lies within a's interval
    const b_overlaps_a = intervals_b[j].start >= intervals_a[i].start && intervals_b[j].start <= intervals_a[i].end

    if (a_overlaps_b || b_overlaps_a) {
      result.push(new Interval(Math.max(intervals_a[i].start, intervals_b[j].start)), new Interval(Math.min(intervals_a[i].end, intervals_b[j].end)))
    }

    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1;
    } else {
      j += 1
    }
  }

  return result;
};