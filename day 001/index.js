// Write a code to find area of rectangle.

const rectLength = 30;
const rectWidth = 40;

const getRectArea = (length, width) => {
  const area = length * width;
  console.log(`rectangle area: ${area}`);
};

const rectArea = getRectArea(rectLength, rectWidth);

// Write a code to find perimeter of rectangle.

const getRectPerimeter = (length, width) => {
  const perimeter = 2 * (length + width);
  console.log(`rectangle perimeter: ${perimeter}`);
};

const rectPerimeter = getRectPerimeter(rectLength, rectWidth);

// Write a code to find diameter, circumference and area of a circle.

const circRadius = 20;

const getCircleProps = (radius) => {
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius ** 2;
  console.log(
    `diameter: ${diameter}, circumference: ${circumference}, area: ${area}`
  );
};

const circleProps = getCircleProps(circRadius);

// Write a code to find angles of triangle if two angles are given.

const angleA = 30;
const angleB = 45;

const getThirdAngle = (angle1, angle2) => {
  const sumAngles = angle1 + angle2;
  const thirdAngle = 180 - sumAngles;
  console.log(`third angle: ${thirdAngle}`);
};

const thirdAngle = getThirdAngle(angleA, angleB);

// Write a code to get difference between dates in days.

const dateA = new Date(2022, 0, 10);
const dateB = new Date(2023, 11, 15);

const getDaysDiff = (date1, date2) => {
  const yearsDiff = date1.getFullYear() - date2.getFullYear();
  const monthsDiff = date1.getMonth() - date2.getMonth();
  const daysDiff = date1.getDate() - date2.getDate();
  const diffInDays = yearsDiff * 365 + monthsDiff * 30 + daysDiff;
  console.log(`difference between dates in days: ${Math.abs(diffInDays)}`);
};

const diffValue = getDaysDiff(dateA, dateB);

// Write a code to convert days to years, months and days.
// Example : 400 days → 1 year, 1 month, 5 days
// 1 year : 365 days, 1 month : 30 days

const xDays = 9;

const convertDays = (numberOfDays) => {
  const years = Math.floor(numberOfDays / 365);
  const remainderFromYears = numberOfDays % 365;
  const months = Math.floor(remainderFromYears / 30);
  const days = remainderFromYears % 30;
  console.log(`${years} year(s), ${months} month(s), ${days} day(s)`);
};

const ymd = convertDays(xDays);
