const { getArrSums, sortStrWoSort, getGCD } = require("./index");

test("Get Sum of Two Arrays", () => {
  expect(getArrSums([1, 1, 1], [2, 2, 2])).toStrictEqual([3, 3, 3]);
});

test("Sort String Without Sort", () => {
  expect(sortStrWoSort("apple")).toBe("aelpp");
});

test("Get Greatest Common Divisor", () => {
  expect(getGCD(24, 12)).toBe(12);
});
