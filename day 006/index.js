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
  name = "";
  email = "";
  age = new Date();
  score = 0;
}

let studentData = [{ name: "Abby", email: "abby@" }];
const findLim = (numArr = [0], findHigh = true) =>
  numArr.reduce((prevVal, currVal) =>
    (findHigh ? prevVal > currVal : prevVal < currVal) ? prevVal : currVal
  );
const createArr = (arr = [{}], key = "") => arr.map((val) => val[key]);
const findAvg = (numArr) =>
  numArr.reduce((prevVal, currVal) => prevVal + currVal) / numArr.length;
const surveyScoreAge = (studentArr = [new Student()]) => {
  let ageArr = createArr(studentArr, "age");
  let scoreArr = createArr(studentArr, "score");

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
let surveyData = surveyScoreAge();
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
