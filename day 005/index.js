// Write a function to get the lowest, highest and average value in the array (with and without sort
// function).

let xNumArr = [-1, 5, 66, 40, 9, -39, 2];
const findLim = (numArr = [0], findHigh = true) =>
  numArr.reduce((prevVal, currVal) =>
    (findHigh ? prevVal > currVal : prevVal < currVal) ? prevVal : currVal
  );
const getNumArrVals = (numArr = [0], useSort = true) => {
  let lowVal, highVal, avgVal;
  if (useSort) {
    numArr.sort((a, b) => a - b);
    lowVal = numArr[0];
    highVal = numArr[numArr.length - 1];
  } else {
    lowVal = findLim(numArr, false);
    highVal = findLim(numArr, true);
  }
  avgVal =
    numArr.reduce((prevVal, currVal) => prevVal + currVal) / numArr.length;

  // avgVal = 0;
  // numArr.map((num) => (avgVal += num));
  // avgVal /= numArr.length;
  return { lowVal, highVal, avgVal };
};
let xVals = getNumArrVals(xNumArr, true);
console.log(
  `lowest value: ${xVals.lowVal}, highest value: ${xVals.highVal}, average value: ${xVals.avgVal}`
);

// Write a function that takes an array of words and returns a string by concatenating the words in
// the array, separated by commas and - the last word - by an 'and'.

let xStrArr = ["apples", "peaches", "grapes", "mangoes"];
const concatStrArr = (strArr = [""]) => {
  //   strArr[strArr.length - 1] = "and " + strArr[strArr.length - 1];
  //   let result = strArr.join(", ");

  let lastStr = strArr.pop();
  let result = strArr.join(", ") + " and " + lastStr;
  return result;
};
let xStr = concatStrArr(xStrArr);
console.log(xStr);

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

// Write a function to calculate each element in the same position from two arrays of integer.
// Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

let numArrA = [5, 9, 3];
let numArrB = [3, 5, 5];
const addArrNums = (firstNumArr = [0], secondNumArr = [0]) =>
  firstNumArr.map((num, idx) => num + secondNumArr[idx]);
let sumArr = addArrNums(numArrA, numArrB);
console.log(sumArr);

// Write a function that adds an element to the end of an array. However, the element should only
// be added if it is not already in the array.

let ranArr = [0, "desktop", 99, ["Xmas"], { name: "Jolly" }, true, null];
const addIfNone = (arr, el) => {
  let isInArr = arr.find((val) => val === el);
  if (!isInArr) {
    arr.push(el);
  }
};
console.log(ranArr);
addIfNone(ranArr, 25);
console.log(ranArr);

// Write a function to remove all odd numbers in an array and return a new array that contains even
// numbers only
