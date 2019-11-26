export default class Command {
  constructor(specialMath) {
    this.specialMath = specialMath;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.specialMath[command]();
    this.commandsExecuted.push(command);
  }
}
