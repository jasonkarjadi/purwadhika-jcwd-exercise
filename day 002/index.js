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
