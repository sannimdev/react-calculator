import ERROR_MESSAGES from "./constant";

export default class Calculator {
  #num1 = 0;
  #num2 = 0;
  #op = null;
  #current = 0;

  constructor() {
    this.clear();
  }

  add(n, m) {
    return n + m;
  }
  subtract(n, m) {
    return n - m;
  }
  multiply(n, m) {
    return n * m;
  }
  divide(n, m) {
    if (m === 0) throw new Error(ERROR_MESSAGES.DIV_0);
    return Math.floor(n / m);
  }

  clear() {
    this.#num1 = 0;
    this.#num2 = 0;
    this.#op = null;
    this.#current = 0;
  }
}

export const useOperator = (calculator) => ({
  "+": calculator.add,
  "-": calculator.subtract,
  x: calculator.multiply,
  X: calculator.multiply,
  "/": calculator.divide,
});
