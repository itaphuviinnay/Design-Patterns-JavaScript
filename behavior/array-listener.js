export function arrayOperations(array, callback) {
  Object.defineProperties(array, {
    push: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function(...args) {
        const result = Array.prototype.push.apply(this, args);
        callback("push", args);
        return result;
      }
    },
    pop: {
      configurable: true,
      enumerable: false,
      writable: true,
      value: function(...args) {
        const result = Array.prototype.pop.apply(this, args);
        callback("pop", result);
        return result;
      }
    }
  });
}

export function listener(operation, values) {
  console.log(
    `${operation} has been performed on the array with values ${values}`
  );
}
