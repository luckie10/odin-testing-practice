import analyzeArray from "./analyzeArray.js";

test("Average", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).average).toBe(3);
});

test("Min", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1);
});

test("Max", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5);
});

test("length", () => {
  expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5);
});

test("Array not provided", () => {
  () => expect(analyzeArray()).toThrow(Error);
});
