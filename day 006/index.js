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

class Student {
  constructor(newName, newEmail, newAge, newScore) {
    this.name = typeof newName === "string" ? newName : "";
    this.email = typeof newEmail === "string" ? newEmail : "";
    this.age = typeof newAge === "object" ? newAge : "";
    this.score = typeof newScore === "number" ? newScore : "";
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
  constructor() {
    this._name = "";
    this._price = 0;
  }
}

class Transaction extends Product {
  constructor() {
    super();
    this._total = 0;
  }
}
