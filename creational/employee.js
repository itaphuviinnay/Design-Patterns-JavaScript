import Shopper from "./shopper";

export default class Employee extends Shopper {
  constructor(name, money = 0, employer = "") {
    super(name, money);
    this.employerName = employer;
    this.employed = true;
  }
}
