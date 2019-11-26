import CumulativeSum from "./cumulative-sum";
import Command from "./command";
import SpecialMath from "./special-math";
import { arrayOperations, listener } from "./array-listener";

function cumulativeSum() {
  const sum1 = new CumulativeSum();
  console.log(
    sum1
      .add(10)
      .add(2)
      .add(50).sum
  );
}

function specialMath() {
  const commandInstance = new Command(new SpecialMath(5));
  commandInstance.execute("square");
  commandInstance.execute("squareRoot");
  commandInstance.execute("cube");
  console.log(commandInstance.commandsExecuted);
}

function arrayOperationListener() {
  const users = ["Alex Banks", "Eve Porcello"];
  arrayOperations(users, listener);
  users.push("Vinay", "Itapu");
  users.pop();
  users.pop();
}

cumulativeSum();
specialMath();
arrayOperationListener();
