import CleverCalculator from "./clever-calculator";
import UltimateCalculator from "./ultimate-calculator";
import CalcAdapter from "./calculator-adapter";
import OldCalculator from "./old-calculator";
import LogCalculator from "./log-calculator";

function oldCalculator() {
  const oldCalculator = new OldCalculator();
  const calcAdapter = new CalcAdapter();
  calcAdapter.multiply(oldCalculator.operations(3, 2, "sub"), 6);
}

function ultimateCalculator() {
  const ultimateCalculator = new UltimateCalculator();
  console.log("multiplication", ultimateCalculator.multiply(3, 200));
  console.log("addition", ultimateCalculator.add(3, 200));
}

function cleverCalculator() {
  const cleverCalculator = new CleverCalculator();
  console.log("clever add", cleverCalculator.operations("add", 99, 99));
  console.log("clever sub", cleverCalculator.operations("sub", 88, 99));
  console.log(
    "clever multiply",
    cleverCalculator.operations("multiply", 3, 22)
  );
  console.log("clever divide", cleverCalculator.operations("divide", 99, 3));
}

function logCalculator() {
  const logCalculator = new LogCalculator();
  logCalculator.logger("add", 99, 13);
}

oldCalculator();
ultimateCalculator();
cleverCalculator();
logCalculator();
