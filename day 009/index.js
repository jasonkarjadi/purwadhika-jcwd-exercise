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

// buat game billiard mirip dengan shooting game.
// terdapat 2 class
// yaitu class player
// class billiard

// terdapat 2 method pada class billiard yaitu 9ball dan 8ball.
// dimana permainan 8 ball harus memasukan bola secara urut. dan pemain yg memasukan bola 9 adalah pemenang. gunakan random untuk menentukan apakah player berhasil memasukan bola atau tidak.  banyak bola ada 1-9.

// sedangkan untuk method permainan bola 8 . terdapat bola 1-15 . masing2 player memasukan bola antara bola solid atau bola stripes. dimana solid adalah 1-7 dan stripes adalah 9-15 . bola yg dimasukan pertama kali menentukan bola yg diambil oleh player tsb. antara solid/stripes. apa bila player memasukan bola 8 sebelum bola yg dipilih habis, maka player yg memasukan bola 8 akan kalah. contoh player 1 memasukan bola 4. maka player 1 hanya boleh memasukan bola 1-7. dan setelah 1-7 habis. maka boleh 8 yg terakhir dimasukan.

// tidak ada foul di permainan ini. foul yg dimaksud adalah pemain memukul bola musuh. misal player 1 hrs memasukan bola solid. tetapi malah memasukan bola stripes. tidak perlu ada foul seperti itu.

class Player {
  constructor(newName) {
    this.name = newName;
  }
}

class Billiard {
  players = [];
  balls = {
    nine: [...Array(9)].map((_, idx) => idx + 1),
    eight: [],
  };

  startNineBall() {}

  startEightBall() {}

  addPlayers(...players) {
    this.players.push(...players);
  }

  doCoinFlip() {
    return Math.round(Math.random());
  }
}
