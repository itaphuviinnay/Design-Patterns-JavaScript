export default class CumulativeSum {
  constructor() {
    this.sum = 0;
  }

  add(num) {
    this.sum += num;
    return this;
  }
}
