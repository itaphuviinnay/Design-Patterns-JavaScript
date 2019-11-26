import Factory from "./factory";

const factory = new Factory();
const shopper = factory.getInstance("shopper", "Alex Banks", 100);
const emp1 = factory.getInstance("employee", "Eve Porcello", 100);
const emp2 = factory.getInstance("employee", "Eve Porcello", 100);
console.log(shopper, emp1, emp2);
