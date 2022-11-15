// Create a function to check if two objects are equal

let xObj = { name: "Adrian", isMale: true };
let yObj = { name: "Adrian", isMale: false, isMarried: false };
let zObj = { name: "Adrian", isFemale: true };

// const forbidFalseInArr = (boolArr = []) =>
//   boolArr.reduce((prevVal, currVal) => prevVal && currVal);

const findFalsyInArr = (boolArr = []) => boolArr.find((bool) => bool === false);

const compareObjToObj = (ObjOne, ObjTwo, props = "") =>
  Object[props](ObjOne).map((prop) => Object[props](ObjTwo).includes(prop));

const compareObjs = (ObjOne, ObjTwo) => {
  let props = ["keys", "values"];
  //   let isEqualObj = props.map((prop) => [
  //     ...compareObjToObj(ObjOne, ObjTwo, prop),
  //     ...compareObjToObj(ObjTwo, ObjOne, prop),
  //   ])
  //     ? true
  //     : false;
  let isEqualObj = false;
  if (findFalsyInArr(compareObjToObj(ObjOne, ObjTwo, props[0])) === false) {
    if (findFalsyInArr(compareObjToObj(ObjTwo, ObjOne, props[0])) === false) {
      if (findFalsyInArr(compareObjToObj(ObjOne, ObjTwo, props[1])) === false) {
        if (
          findFalsyInArr(compareObjToObj(ObjTwo, ObjOne, props[1])) === false
        ) {
          isEqualObj = true;
        }
      }
    }
  }
  return isEqualObj;
};

console.log(compareObjs(xObj, zObj));
console.log(compareObjs(xObj, yObj));

// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

const getObjIntersect = (objOne, objTwo) => {};

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
    this.name = typeof newName === "string" ? newName : "";
    this.email = typeof newEmail === "string" ? newEmail : "";
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
];

const mergeDataArr = (arrOne, arrTwo) => {};

// Create a function that can accept input as an array of objects and switch all values into
// property and property into value
// Example :
// Input : [{ name: ‘David’, age: 20 }]
// Output : [{ David: ‘name’, 20: ‘age’}]

const swapObjPropsInArr = (objArr) => {};

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
