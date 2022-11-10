// Write a code to display the multiplication table of a given integer.
// Example : Number → 9
// Output :
// 9 x 1
// 9 x 2
// …
// 9 x 10

let xNum = 9;

for (let i = 1; i <= 10; i++) {
  console.log(`${xNum} x ${i}\n`);
}

// Write a code to check whether a string is a palindrome or not.

let xWord = "adik";

if (xWord == xWord.split("").reverse().join("")) {
  console.log(`${xWord} is a palindrome`);
} else {
  console.log(`${xWord} is NOT a palindrome`);
}

// Write a code to convert centimeter to kilometer.

let cmLength = 2000;

let kmLength = cmLength / 100000;
console.log(`${cmLength} cm equals to ${kmLength} km`);

// Write a code to format number as currency (IDR)
// Example : 1000 → “Rp. 1.000,00”

let xMoney = 15000;

let IDR = `Rp${xMoney},00`;
console.log(IDR);

// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”

let xString = "so long where did we go wrong";
let searchString = "ong";

let newString = xString.replace(searchString, "");
console.log(newString);

// Write a code to capitalize the first letter of each word in a string
// Example : “hello world” → “Hello World”

let strArray = xString.split(" ");

for (let i = 0; i < strArray.length; i++) {
  let splitted = strArray[i].split("");
  splitted[0] = splitted[0].toUpperCase();
  let capWord = splitted.join("");
  strArray[i] = capWord;
}
let capString = strArray.join(" ");
console.log(capString);

// Write a code to reverse a string.

let revString = xString.split("").reverse().join("");
console.log(`reversed string: ${revString}`);
