// Create a function to convert Excel sheet column title to its corresponding column number.
// Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// …
// Example :
// Input : AB
// Output : 28

const convertExcelCol = (colTitle = "A") => {
  let colNum = colTitle
    .trim()
    .toLowerCase()
    .split("")
    .reverse()
    .map((letter, idx) => (letter.charCodeAt(0) - 96) * 26 ** idx)
    .reduce((prevVal, currVal) => prevVal + currVal);
  return colNum;
};
console.log(convertExcelCol("A"));

// Given a non-empty array of integers nums, every element appears twice except for one. Find
// that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra
// space.
// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

const findSingleElem = (arr) => {
  let singleElem;
  // if (arr.length > 1) {
  let duplicates = arr.filter(
    (xElem, idx, thisArr) =>
      idx !== thisArr.findIndex((yElem) => xElem === yElem)
  );
  console.log(duplicates);
  singleElem = arr.find((elem) =>
    duplicates
      .map((dupl) => elem !== dupl)
      .reduce((prevVal, currVal) => prevVal && currVal)
  );
  // } else {
  //   singleElem = arr[0];
  // }
  return singleElem;
};
console.log(findSingleElem([1, 1, 3, 3, 5, 4, 4, 2, 2]));

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

let s = "halim";
let t = "hamil";

const prepStr = (inputString = "") =>
  inputString
    .toLowerCase()
    .split("")
    .filter((str) => str !== " ")
    .sort();

const checkIsAnagram = (stringA = "", stringB = "") => {
  // includes all letters == is anagram
  let isAnagram =
    stringA.length == stringB.length
      ? prepStr(stringA)
          .map((letter, idx) => letter === prepStr(stringB)[idx])
          .reduce((prevVal, currVal) => prevVal && currVal)
      : false;
  return isAnagram;
};
console.log(checkIsAnagram(s, t));

// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1
// or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// const getNumsOfPossRoutes = (inputNum) => {
//   let numsOfPossRoutes = 0;
//   let equation = [];
//   for (let i = Math.abs(inputNum); inputNum == 0; i--) {
//     equation.push(1);
//   }
//   if (equation.length) {
//     numsOfPossRoutes++;
//     equation.splice(0, 2, 2);
//     console.log(equation);
//     numsOfPossRoutes++;
//   }
//   return numsOfPossRoutes;
// };
// getNumsOfPossRoutes(3);

// class Staircase {
//   static possRoutes = [];

//   static getNumOfPossRoutes(inputNum = 0) {
//     let allOneArr = new Array(inputNum).fill(1);
//     this.possRoutes.push(allOneArr.slice(0));

//     // if (stepsArr.length > 1) {
//     //   stepsArr.shift();
//     //   stepsArr[0] = 2;
//     //   this.possRoutes.push(stepsArr);
//     // }

//     let stepsArr = allOneArr.slice(0);
//     for (let i = 0; stepsArr[i] && stepsArr[i + 1]; i++) {
//       stepsArr.splice(i, 2, 2);
//       this.possRoutes.push(stepsArr.slice(0));

//       let tempArr = stepsArr.slice(0);
//       for (let j = 0; j <= i; j++) {
//         let offset = i - j;
//         for (let k = 0; k < tempArr.slice(i + 1).length; k++) {
//           let idx = offset + k;
//           [tempArr[idx], tempArr[idx + 1]] = [tempArr[idx + 1], tempArr[idx]];
//           this.possRoutes.push(tempArr.slice(0));
//         }
//       }
//     }

//     return this.possRoutes.length;
//   }
// }

// console.log(Staircase.getNumOfPossRoutes(5));
// console.log(Staircase.possRoutes);

// 1 -> 1
// 1

// 2 -> 1, 1
// 1 + 1
// 2

// 3 -> 1, 2
// 1 + 1 + 1
// 2 + 1
// 1 + 2

// 4 -> 1, 3, 1
// 1 + 1 + 1 + 1
// 2 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2
// 2 + 2

// 5 -> 1, 4, 3
// 1 + 1 + 1 + 1 + 1
// 2 + 1 + 1 + 1
// 1 + 2 + 1 + 1
// 1 + 1 + 2 + 1
// 1 + 1 + 1 + 2
// 2 + 2 + 1
// 2 + 1 + 2
// 1 + 2 + 2

const getNumsOfPossRoutes = (inputNum = 0) => {
  let xNum = 0;
  let yNum = 1;
  for (let i = 0; i < Math.abs(inputNum); i++) {
    [xNum, yNum] = [yNum, xNum + yNum];
  }
  return !xNum ? 0 : yNum;
};

console.log(getNumsOfPossRoutes(6));
