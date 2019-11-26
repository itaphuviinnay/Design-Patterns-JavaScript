import Employee from "./employee";
import Shopper from "./shopper";

export default class factory {
  constructor() {
    this.employee = null;
  }

  getInstance(type, name, money = 100, employer = "") {
    if (type === "shopper") {
      return new Shopper(name, money);
    } else if (type === "employee") {
      if (this.employee) {
        console.warn(
          "Employee instance already exists. Returning the previous instance"
        );
        return this.employee;
      } else {
        this.employee = new Employee(name, money, employer);
        return this.employee;
      }
    }
  }
}
