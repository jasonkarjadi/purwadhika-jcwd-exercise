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
  if (arr.length > 1) {
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
  } else {
    singleElem = arr[0];
  }
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
