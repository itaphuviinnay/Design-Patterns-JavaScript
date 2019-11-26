import CleverCalculator from "./clever-calculator";

export default class LogCalculator extends CleverCalculator {
  constructor() {
    super();
  }
  logger(type, n1, n2) {
    console.log(
      `${type} of ${n1} and ${n2} is ${this.operations(type, n1, n2)}`
    );
  }
}
