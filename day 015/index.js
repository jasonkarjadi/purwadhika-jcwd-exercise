// Write a code to check whether the date is a weekend.

const checkLocalDayIsWeekend = (year, month, date) => {
  const localDay = new Date(`${year}-${month}-${date}`).getDay();
  const isWeekend = localDay === 0 || localDay === 6 ? true : false;
  return isWeekend;
};

// Write a code to find GCD of two numbers → use while.

const getGCD = (numberA, numberB) => {
  let [divisor, remainder] =
    numberA > numberB ? [numberA, numberB] : [numberB, numberA];
  while (remainder > 0) {
    [divisor, remainder] = [remainder, divisor % remainder];
  }
  return divisor;
};

// Write a code to find LCM of two numbers → use do … while.

const getLCM = (numberA, numberB) => {
  let multiple;
  do {
    multiple = (numberA * numberB) / getGCD(numberA, numberB);
  } while (false);
  return multiple;
};

// Write a code to find most common character from a string

const getMostCommonChars = (string) => {
  const charArr = string.split("");
  const diffChars = new Set(charArr);
  const charOccs = diffChars.map((diffChar) => [
    diffChar,
    charArr.filter((char) => char === diffChar).length,
  ]);
  const highestOccNum = Math.max(charOccs.map((charOcc) => charOcc[1]));
  const mostCommonChars = charOccs.filter(
    (charOcc) => charOcc[1] === highestOccNum
  );
  return mostCommonChars;
};

// Write a code to sort a string alphabetically (with and without sort function)

const sortStrWSort = (string) => {
  return string.split("").sort();
};

const sortStrWoSort = (string) => {
  return;
};

// Write a code to get minimum date from array of dates.

const getMinDate = (dateArray) => {
  const minDate = 0;
  return minDate;
};

// Write a code that calculates the sum of all elements of a two-dimensional array

const getArrSums = (arrayA, arrayB) => {
  const arrSums = arrayA.map((elem, idx) => elem + arrayB[idx]);
  return arrSums;
};

// Write a code to find the longest common prefix string amongst an array of strings.

const getLongestCommonPrefix = (stringArray) => {};

// Write a code that copies the first half of an array. With an odd number of array elements, the
// middle element should belong to the first half

const getArrFirstHalf = (array) => {
  return array.slice(0, Math.floor(array.length / 2));
};

// Write a code to get the number of days in a month
// Example : month = 1, year = 2022 → 31

const calcDaysOfMonth = (month, year) => {
  if (Number.isInteger(month) && month <= 12 && month >= 1) {
    let days;
    if (month != 2) {
      days = [4, 6, 9, 11].includes(month) ? 30 : 31;
    } else if (Number.isInteger(year) && year > 0) {
      days =
        year % 4 != 0 ? 28 : year % 100 != 0 ? 29 : year % 400 != 0 ? 28 : 29;
    } else throw new Error("year must be positive integer");
    return days;
  } else throw new Error("month must be integer between 1 to 12");
};

// Write a code to count the number of days passed since beginning of the year

const getLocalDaysPassedThisYear = () => {
  const currTime = new Date();
  const currYear = currTime.getFullYear();
  const beginningTime = new Date(`${currYear}-01-01`);
  const daysDiff = (currTime - beginningTime) / 86400000;
  return daysDiff;
};

// Write a code to calculate age

// 2001-02-28
const calcAge = (birthYear, birthMonth, birthDate) => {
  const ageInYears =
    (new Date() - new Date(`${birthYear}-${birthMonth}-${birthDate}`)) /
    31536000000;
  return ageInYears;
};

export {
  checkLocalDayIsWeekend,
  getGCD,
  getLCM,
  getMostCommonChars,
  sortStrWSort,
};
