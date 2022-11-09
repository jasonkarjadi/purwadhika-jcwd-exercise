// Write a code to convert celsius to fahrenheit.

const xNum = 15;

const xTempF = (xNum * 9) / 5 + 32;
console.log(xTempF);

// Write a code to check whether the number is odd or even

if (xNum % 2 == 0) {
  console.log(`${xNum} is even`);
} else {
  console.log(`${xNum} is odd`);
}

// Write a code to check whether the number is prime number or not

if (xNum <= 1 || xNum % 2 == 0) {
  console.log(`${xNum} is NOT a prime number`);
} else {
  let isPrime = true;
  for (let i = 3; i <= Math.sqrt(xNum); i += 2) {
    if (xNum % i == 0) {
      isPrime = false;
    }
  }
  if (!isPrime) {
    console.log(`${xNum} is NOT a prime number`);
  } else {
    console.log(`${xNum} is a prime number`);
  }
}

// Write a code to find the sum of the numbers 1 to N.
// Example : 5 → 1 + 2 + 3 + 4 + 5 = 15

let sumNum = 0;
let numString = "";

for (let i = 1; i <= xNum; i++) {
  sumNum += i;
  numString += i == 1 ? `${i}` : ` + ${i}`;
}
console.log(`the sum numbers of 1 to ${xNum} -> ${numString} = ${sumNum}`);

// Write a code to find factorial of a number.

let factorial = 1;

for (let i = 1; i <= xNum; i++) {
  factorial *= i;
}
console.log(`factorial of ${xNum} is ${factorial}`);

// Write a code to print the first N fibonacci numbers.

let firstNum = 0;
let secondNum = 1;
let numStr = "0, ";

for (let i = 1; i < xNum; i++) {
  numStr += i == 1 ? `${secondNum}` : `, ${secondNum}`;
  let nextNum = firstNum + secondNum;
  firstNum = secondNum;
  secondNum = nextNum;
}
console.log(`the first ${xNum} fibonacci numbers: ${numStr}`);

// Soal tambahan

// Berat badan
// Tinggi badan
// Find BMI
// Outputnya:
// Bila beratnya ideal
// diinfo ideal
// Kalau tidak ideal
// info tidak ideal

const kgWeight = 50;
const mHeight = 1.8;
const BMI = Number((kgWeight / mHeight ** 2).toFixed(1));
const lowLim = 18.5;
const highLim = 24.9;
if (BMI < lowLim || BMI > highLim) {
  console.log(
    `BMI: ${BMI}, tidak ideal, ${
      BMI - lowLim < 0
        ? `kurang ${(lowLim - BMI).toFixed(1)}`
        : `lebih ${(BMI - highLim).toFixed(1)}`
    } untuk ideal`
  );
} else {
  console.log(`BMI: ${BMI}, ideal`);
}

// Input total loop
// console.log angka yang di loop
// bila habis dibagi 3 console.log("BUZZ")
// bila habis dibagi 5 console.log("FUZZ")
// bila habis dibagi keduanya console.log("FUZZBUZZ")

let fuzzbuzzstring = "";

for (let i = 1; i <= xNum; i++) {
  let tempString = "";
  if (i % 5 == 0 || i % 3 == 0) {
    if (i % 5 == 0) {
      tempString += "FUZZ";
    }
    if (i % 3 == 0) {
      tempString += "BUZZ";
    }
  } else {
    tempString += `${i}`;
  }
  fuzzbuzzstring += `${tempString} `;
}
console.log(fuzzbuzzstring);
