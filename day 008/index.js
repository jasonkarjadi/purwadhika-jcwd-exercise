// Specifications :
// Create a program to calculate total salary based on employee type
// There are two types of employee : full-time & part-time
// Salary for full-time employee :
// IDR 100.000 / hour
// IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// Salary for part-time employee :
// IDR 50.000 / hour
// IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// Requirements :
// Create an Employee as a parent class
// Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// Create a method in that class to add working hour per day
// Create a method in that class to calculate total salary
// Use inheritance concept
class Hours {
  constructor(xReg, xOver) {
    this.regular = xReg;
    this.overtime = xOver;
  }
}
class Employee {
  constructor(xName, xAge, xAddress, xCompany, xRegRate, xOverRate) {
    this.name = xName;
    this.age = xAge;
    this.address = xAddress;
    this.company = xCompany;
    this.regularRate = xRegRate;
    this.overtimeRate = xOverRate;
    this.hoursInDays = [];
  }

  addHours(xHours) {
    if (xHours >= 1 && xHours <= 24) {
      let margin = xHours - 6;
      let hoursTuple = margin < 0 ? [xHours, 0] : [6, margin];
      this.hoursInDays.push(new Hours(...hoursTuple));
      return hoursTuple.join(" + ");
    } else {
      throw new Error("invalid hours input");
    }
  }

  calcTtlSalary() {
    let wageArr = this.hoursInDays.map(
      (hInD) =>
        hInD.regular * this.regularRate + hInD.overtime * this.overtimeRate
    );
    let sumWage = wageArr.reduce((prevVal, currVal) => prevVal + currVal);
    let wageText = `Rp${sumWage.toLocaleString().replace(/,/g, ".")},00`;
    return wageText;
  }
}
class FulltimeEmployee extends Employee {
  constructor(name, age, address, company) {
    super(name, age, address, company, 100000, 75000);
  }
}
class ParttimeEmployee extends Employee {
  constructor(name, age, address, company) {
    super(name, age, address, company, 50000, 30000);
  }
}

let xWorker = new FulltimeEmployee(
  "Justin",
  20,
  "Tarky's Building 201",
  "Meikarta"
);
xWorker.addHours(6);
console.log(xWorker.calcTtlSalary());

// Specifications :
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// The game will continue until one of the players has health < 0
// Requirements :
// Create ShootingGame & Player class
// ShootingGame class :
// constructor(player1, player2) → player objects as a parameter
// getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// start() → start shooting games
// Player class :
// Property → name, health (default 100), power (default 10)
// hit(power) → subtract player health
// useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ShootingGame start() function flow :
// In every turn :
// Show each player status before shooting
// Get random item for each player before shooting
// Show each player status after shooting
// Show winner name

// 0 0
// 1 0.4
// 2 0.8
// 3 1.2
// 4 1.6
// 5 2
// 6 2.4
// 7 2.8
// 8 3.2
// 9 3.6

class ShootingGame {
  constructor(xPlayerOne = new Player("A"), xPlayerTwo = new Player("B")) {
    this.playerOne = xPlayerOne;
    this.playerTwo = xPlayerTwo;
    this.items = [{ health: 0 }, { health: 10 }, { power: 0 }, { power: 10 }];
    this.roundNum = 0;
    this.history = [];
  }

  getRandomItem() {
    let randomNum = Math.trunc(Math.random() * 4);
    // console.log(randomNum);
    return this.items[randomNum];
  }

  doOneInteraction(attacker, receiver) {
    let randomItem = this.getRandomItem();
    attacker.useItem(randomItem);
    let randomItemEnts = Object.entries(randomItem);
    receiver.hit(attacker.power);
    this.history.push(
      `Player ${attacker.name} receives item with ${randomItemEnts.join(
        " +"
      )} effect`,
      `Player ${attacker.name} with power ${attacker.power} attacks Player ${receiver.name}`,
      `Player ${receiver.name}'s health decreases to ${receiver.health}`
    );
    return receiver.health;
  }

  doOneRound() {
    this.roundNum++;
    let playersTurn = Math.round(Math.random())
      ? [this.playerOne, this.playerTwo]
      : [this.playerTwo, this.playerOne];
    this.history.push(
      `Round ${this.roundNum}: Player ${playersTurn[0].name} acts first`
    );
    let firstAftermathHP = this.doOneInteraction(...playersTurn);
    if (firstAftermathHP >= 0) {
      let secondAftermathHP = this.doOneInteraction(...playersTurn.reverse());
      if (secondAftermathHP >= 0) {
        this.doOneRound();
      }
    }
  }

  start() {
    this.history.push(this.playerOne.showStatus(), this.playerTwo.showStatus());
    this.doOneRound();
    return this.history;
  }
}
class Player {
  constructor(xName, xHealth = 100, xPower = 10) {
    this.name = xName;
    this.health = xHealth;
    this.power = xPower;
  }

  hit(xPower) {
    this.health -= xPower;
  }

  useItem(xItem) {
    let buffs = Object.entries(xItem);
    buffs.map((buff) => (this[buff[0]] += buff[1]));
  }

  showStatus() {
    let statusText = `Player ${this.name} (Health => ${this.health}, Power => ${this.power})`;
    return statusText;
  }
}

let playerA = new Player("Dante");
let playerB = new Player("John");
let xGame = new ShootingGame(playerA, playerB);
// let xGameHistory = xGame.start();
// console.log(xGameHistory.join("\n"));
