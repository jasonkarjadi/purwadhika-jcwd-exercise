// Create a function to check if two objects are equal

let xObj = { name: "Adrian", isMale: true };
let yObj = { name: "Adrian", isMale: false, isMarried: false };
let zObj = { name: "Adrian", isMale: true };

// const forbidFalseInArr = (boolArr = []) =>
//   boolArr.reduce((prevVal, currVal) => prevVal && currVal);

const findFalsyInArr = (boolArr = []) => boolArr.find((bool) => bool === false);

const compareObjToObj = (ObjOne, ObjTwo, props = "") =>
  Object[props](ObjOne).map((prop) => Object[props](ObjTwo).includes(prop));

const checkFalse = (ObjOne, ObjTwo, props = "") =>
  findFalsyInArr(compareObjToObj(ObjOne, ObjTwo, props)) === undefined;

const compareObjs = (ObjOne, ObjTwo) => {
  let props = ["keys", "values"];
  //   let isEqualObj = props.map((prop) => [
  //     ...compareObjToObj(ObjOne, ObjTwo, prop),
  //     ...compareObjToObj(ObjTwo, ObjOne, prop),
  //   ])
  //     ? true
  //     : false;
  let isEqualObj = false;
  if (checkFalse(ObjOne, ObjTwo, props[0])) {
    if (checkFalse(ObjTwo, ObjOne, props[0])) {
      if (checkFalse(ObjOne, ObjTwo, props[1])) {
        if (checkFalse(ObjTwo, ObjOne, props[1])) {
          isEqualObj = true;
        }
      }
    }
  }
  return isEqualObj;
};

console.log(compareObjs(xObj, zObj));
console.log(compareObjs(xObj, yObj));

let xVar = Object.entries(xObj);
let zVar = Object.entries(zObj);

console.log(xVar);
// console.log(zVar);
console.log(xVar);

const compareObjEntries = (objOne, objTwo) => {
  let isEqualObj = false;
  // if () {

  // }
  return isEqualObj;
};

// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

let alphaObj = { a: 1, b: 2 };
let betaObj = { c: 3, a: 1 };
// let gammaObj = { false: 1, undefined: 3 };

// let alphaKeys = Object.keys(alphaObj);

// let sameKeys = alphaKeys.map((key) => Object.hasOwn(betaObj, key) && key);
// console.log(sameKeys);
// let filteredKeys = sameKeys.filter(
//   (key) => typeof key === "string" || typeof key === "number"
// );
// console.log(filteredKeys);
// let filteredVals = filteredKeys.map((val) => alphaObj[val]);
// console.log(filteredVals);
// let intersected = Object.assign({}, alphaObj);
// console.log(intersected);

let alphaEnts = Object.entries(alphaObj);
let betaEnts = Object.entries(betaObj);

// console.log(alphaEnts);
// console.log(betaEnts);

let intxdArr = betaEnts.filter((betaEnt) =>
  alphaEnts.find(
    (alphaEnt) => alphaEnt[0] === betaEnt[0] && alphaEnt[1] === betaEnt[1]
  )
);
let intxdObj = Object.fromEntries(intxdArr);
console.log(intxdObj);

const getObjsIntersect = (objX = {}, objY = {}) => {
  let xEnts = Object.entries(objX);
  let yEnts = Object.entries(objY);

  let intxn = Object.fromEntries(
    yEnts.filter((yEnt) =>
      xEnts.find((xEnt) => xEnt[0] === yEnt[0] && xEnt[1] === yEnt[1])
    )
  );

  return intxn;
};
console.log(getObjsIntersect(alphaObj, betaObj));

// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]
// Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’ },
// { name: ‘Student 2’, email : ‘student2@mail.com’ },
// { name: ‘Student 3’, email : ‘student3@mail.com’ }
// ]

class Student {
  constructor(newName, newEmail) {
    this.name = newName;
    this.email = newEmail;
  }
}

let xDataArr = [
  new Student("Mega", "mega@mail.com"),
  new Student("Catherine", "catherine@mail.com"),
  new Student("Tarou", "tarou@mail.com"),
];
let yDataArr = [
  new Student("Paul", "paul@gmail.com"),
  new Student("Tarou", "yamadatarou@mail.com"),
  new Student("Mega", "mega@mail.com"),
];

const mergeDataArr = (arrX = [{}], arrY = [{}]) => {
  let arrZ = [...arrX, ...arrY];

  // let entries = arrZ.map((obj) => Object.entries(obj));
  // let filtered = entries.filter(
  //   (xEnts, idx, thisArr) =>
  //     thisArr.filter((yEnts) => yEnts.map((yEnt) => yEnt[0])).length === 1
  // );

  let filtered = arrZ.filter(
    (xObj, idx, thisArr) =>
      idx ===
      thisArr.findIndex((yObj) =>
        Object.keys(yObj)
          .map((key) => yObj[key] === xObj[key])
          .reduce((prevVal, currVal) => prevVal && currVal)
      )
  );

  return filtered;
};
console.log(mergeDataArr(xDataArr, yDataArr));

// Create a function that can accept input as an array of objects and switch all values into
// property and property into value
// Example :
// Input : [{ name: ‘David’, age: 20 }]
// Output : [{ David: ‘name’, 20: ‘age’}]

let xObjArr = [
  { name: "Markovich", numOfPassports: 2 },
  { name: "Sayaka", isMale: false },
];

// let xKeysArr = xObjArr.map((obj) => Object.keys(obj));
// console.log(xKeysArr);
// let xValsArr = xObjArr.map((obj) => Object.values(obj));
// console.log(xValsArr);
// let xRes = xValsArr.map((vals, xid) =>
//   Object.fromEntries(vals.map((val, yid) => [val, xKeysArr[xid][yid]]))
// );
// console.log(xRes);

// const swapKeyValuePairsInArr = (objArr) => {
//   let keysArr = objArr.map((obj) => Object.keys(obj));
//   let valsArr = objArr.map((obj) => Object.values(obj));
//   let res = valsArr.map((vals, xid) =>
//     Object.fromEntries(vals.map((val, yid) => [val, keysArr[xid][yid]]))
//   );
//   return res;
// };

// console.log(swapKeyValuePairsInArr(xObjArr));

const swapKeyValuePair = (xObj = {}) => {
  let xEnts = Object.entries(xObj);
  let result = Object.fromEntries(xEnts.map((ent) => ent.reverse()));
  return result;
};
console.log(swapKeyValuePair(xObjArr[0]));
console.log(xObjArr.map((obj) => swapKeyValuePair(obj)));

// Create a function to find a factorial number using recursion

const getFactorial = (num = 1) => {
  let counter = 1;
  let factorial = 1;
  const doRecursive = () => {
    if (num > counter) {
      counter++;
      factorial *= counter;
      doRecursive();
    }
  };
  doRecursive();
  return factorial;
};
let result = getFactorial(3);
console.log(result);
