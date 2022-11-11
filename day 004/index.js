// Create a function that can create a triangle pattern according to the height we provide like the
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// Parameters : height → triangle height

const loopNumSpread = (number) => {
  let numStrArr = [];
  for (let i = 1; i <= number; i++) {
    numStrArr.push(i.toString().length == 1 ? `0${i}` : `${i}`);
  }

  let numOfLines = 0;
  let sumNum = 0;
  do {
    numOfLines++;
    sumNum += numOfLines;
  } while (sumNum < number);

  let startIdx = 0;
  for (let i = 1; i <= numOfLines; i++) {
    let endIdx = i + startIdx;
    let numSlice = numStrArr.slice(startIdx, endIdx);
    startIdx = endIdx;
    console.log(numSlice.toString().replace(/,/g, " "));
  }
};
// loopNumSpread(10);

const loopNumTri = (numFrom = 1, triH = 4) => {
  let numStrArr = [];
  let numAmount = (triH ** 2 + triH) / 2;
  for (let i = numFrom; i < numFrom + numAmount; i++) {
    numStrArr.push(i.toString().length == 1 ? `0${i}` : `${i}`);
  }

  let res = "";
  let startIdx = 0;
  for (let i = 1; i <= triH; i++) {
    let endIdx = i + startIdx;
    let sliceString = numStrArr
      .slice(startIdx, endIdx)
      .toString()
      .replace(/,/g, " ");
    startIdx = endIdx;
    res += i == 1 ? sliceString : `\n${sliceString}`;
  }
  console.log(res);
};
loopNumTri(1, 6);

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of ú with "Fizz", multiples of ü with "Buzz", multiples of ú and ü with
// "FizzBuzz".
// Parameters : n → total looping

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 1ÿ.5 return “less weight”
// 1ÿ.5 - 24.Ā return “ideal”
// 25.0 - 2Ā.Ā return “overweight”
// 30.0 - 3Ā.Ā return “very overweight”
// > 3Ā.Ā return “obesity”

// Write a function to remove all odd numbers in an array and return a new array that contains
// even numbers only

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]
