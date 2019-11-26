import UltimateCalculator from "./ultimate-calculator";

export default class CleverCalculator {
  constructor() {
    this.previousResults = {
      add: {},
      sub: {},
      multiply: {},
      divide: {}
    };
    this.ultimateCalculator = new UltimateCalculator();
  }

  operations(type, n1, n2) {
    switch (type) {
      case "add":
        if (!this.previousResults[type][`${n1}+${n2}`])
          this.previousResults[type][
            `${n1}+${n2}`
          ] = this.ultimateCalculator.add(n1, n2);
        return this.previousResults[type][`${n1}+${n2}`];

      case "sub":
        if (!this.previousResults[type][`${n1}-${n2}`])
          this.previousResults[type][
            `${n1}-${n2}`
          ] = this.ultimateCalculator.sub(n1, n2);
        return this.previousResults[type][`${n1}-${n2}`];

      case "multiply":
        if (!this.previousResults[type][`${n1}*${n2}`])
          this.previousResults[type][
            `${n1}*${n2}`
          ] = this.ultimateCalculator.multiply(n1, n2);
        return this.previousResults[type][`${n1}*${n2}`];

      case "divide":
        if (!this.previousResults[type][`${n1}/${n2}`])
          this.previousResults[type][
            `${n1}/${n2}`
          ] = this.ultimateCalculator.divide(n1, n2);
        return this.previousResults[type][`${n1}/${n2}`];
    }
  }
}
