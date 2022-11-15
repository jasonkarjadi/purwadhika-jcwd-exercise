// Create a function to calculate array of student data
// The object has this following properties :
// Name → String
// Email → String
// Age → Date
// Score → Number
// Parameters : array of student
// Return values :
// Object with this following properties :
// Score
// Highest
// Lowest
// Average
// Age
// Highest
// Lowest
// Average

const checkDataType = (input, dataType = "") => {
  if (input && typeof input === dataType) {
    return input;
  } else throw new Error(`input is empty or not a ${dataType}`);
};

class Student {
  constructor(newName, newEmail, newAge, newScore) {
    this.name = checkDataType(newName, "string");
    this.email = checkDataType(newEmail, "string");
    this.age = checkDataType(newAge, "object");
    this.score = checkDataType(newScore, "number");
  }
}
let studentsData = [
  new Student("Abby", "abby@gmail.com", new Date("2000-11-12"), 70),
  new Student("Katrina", "katrina@gmail.com", new Date("2000-10-12"), 65),
  new Student("Inigo", "inigo@gmail.com", new Date("2001-11-11"), 30),
];

const findLim = (numArr = [0], findHigh = true) =>
  numArr.reduce((prevVal, currVal) =>
    (findHigh ? prevVal > currVal : prevVal < currVal) ? prevVal : currVal
  );
const findAvg = (numArr) =>
  numArr.reduce((prevVal, currVal) => prevVal + currVal) / numArr.length;

const surveyScoreAge = (studentArr = [new Student()]) => {
  let currTime = new Date();

  let ageArr = studentArr.map(({ age }) => {
    const getDiffInDate = (key = "") => currTime[key]() - age[key]();
    let keys = ["getFullYear", "getMonth", "getDate"];
    let timeDiffs = keys.map((key) => getDiffInDate(key));
    (timeDiffs[1] < 0 || (timeDiffs[1] == 0 && timeDiffs[2] < 0)) &&
      --timeDiffs[0];
    return timeDiffs[0];
  });
  let scoreArr = studentArr.map(({ score }) => score);

  let highScore = findLim(scoreArr, true);
  let lowScore = findLim(scoreArr, false);
  let avgScore = findAvg(scoreArr);

  let highAge = findLim(ageArr, true);
  let lowAge = findLim(ageArr, false);
  let avgAge = findAvg(ageArr);

  return {
    score: { highest: highScore, lowest: lowScore, average: avgScore },
    age: { highest: highAge, lowest: lowAge, average: avgAge },
  };
};
let surveyData = surveyScoreAge(studentsData);
console.log(surveyData);

// Create a program to create transaction
// Product Class
// Properties
// Name
// Price
// Transaction Class
// Properties
// Total
// Product
// All product data
// Qty
// Add to cart method → Add product to transaction
// Show total method → Show total current transaction
// Checkout method → Finalize transaction, return transaction data

class Product {
  constructor(newName, newPrice) {
    this.name = checkDataType(newName, "string");
    this.price = checkDataType(newPrice, "number");
  }
}

let kensakiCoach = new Product("Kensaki Coach", 9200);
let coteBoleroNega = new Product("Cote Bolero Nega", 9980);
let inkSplashShirt = new Product("Ink Splash Shirt", 9750);

class TransactionItem extends Product {
  constructor({ name, price }, newQuantity) {
    super(name, price);
    this.quantity = checkDataType(newQuantity, "number");
  }
}

class Transaction {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(shopItem) {
    if (shopItem instanceof TransactionItem) {
      this.products.push(shopItem);
    } else throw new Error("input is not instanceof TransactionItem");
  }

  calcTotal() {
    this.total =
      this.products.length > 0
        ? this.products
            .map(({ price, quantity }) => price * quantity)
            .reduce((prevVal, currVal) => prevVal + currVal)
        : 0;
  }

  showTotal() {
    this.calcTotal();
    console.log(`Total: ${this.total}`);
    return this.total;
  }

  doCheckout(paymentAmount) {
    let resText = "";
    this.calcTotal();
    if (paymentAmount >= this.total) {
      resText = `Payment success! (change: ${paymentAmount - this.total})`;
      this.products = [];
    } else {
      resText = `Payment failure: ${this.total - paymentAmount} deficit`;
    }
    console.log(resText);
    return resText;
  }
}

let myTransaction = new Transaction();
let xItem = new TransactionItem(kensakiCoach, 2);
let yItem = new TransactionItem(kensakiCoach, 5);
myTransaction.addProduct(xItem);
myTransaction.addProduct(yItem);
console.log(myTransaction.products);
myTransaction.showTotal();
myTransaction.doCheckout(80000);
console.log(myTransaction.products);
