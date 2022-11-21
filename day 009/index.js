class Calculator {
  #_input = "";
  #result = 0;
  #history = [];

  get input() {
    return this.#_input;
  }
  set input(strInput) {
    let equation = strInput
      .split("")
      .filter((elem) => elem !== " ")
      .join("");
    this.#_input = equation;
    // this.#result = eval(equation);
    this.#result = Function(`"use strict"; return (${equation})`)();
    this.#history.push(equation);
  }

  showHistory() {
    return this.#history.join("\n");
  }

  clearHistory() {
    this.#history = [];
  }

  showResult() {
    return this.#result;
  }
}

let myCalc = new Calculator();
myCalc.input = "5 + 5 * 10 / 2";
console.log(myCalc.showResult());
console.log(myCalc.input);
