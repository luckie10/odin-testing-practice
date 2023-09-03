import Calculator from "./calculator.js";

test("Two numbers were not provided", () => {
  expect(() => Calculator.add()).toThrow(Error);
  expect(() => Calculator.add("hello", 3)).toThrow(Error);
  expect(() => Calculator.add(3, "hello")).toThrow(Error);

  expect(() => Calculator.subtract()).toThrow(Error);
  expect(() => Calculator.subtract("hello", 3)).toThrow(Error);
  expect(() => Calculator.subtract(3, "hello")).toThrow(Error);

  expect(() => Calculator.divide()).toThrow(Error);
  expect(() => Calculator.divide("hello", 3)).toThrow(Error);
  expect(() => Calculator.divide(3, "hello")).toThrow(Error);

  expect(() => Calculator.multiply()).toThrow(Error);
  expect(() => Calculator.multiply("hello", 3)).toThrow(Error);
  expect(() => Calculator.multiply(3, "hello")).toThrow(Error);
});

test("Addition", () => {
  expect(Calculator.add(1, 1)).toBe(2);
  expect(Calculator.add(10, 2)).toBe(12);
  expect(Calculator.add(10, -2)).toBe(8);

  expect(Calculator.add("1", 1)).toBe(2);
});

test("Subtraction", () => {
  expect(Calculator.subtract(1, 1)).toBe(0);
  expect(Calculator.subtract(10, 2)).toBe(8);
  expect(Calculator.subtract(10, -2)).toBe(12);

  expect(Calculator.subtract("1", 1)).toBe(0);
});

test("Division", () => {
  expect(Calculator.divide(1, 1)).toBe(1);
  expect(Calculator.divide(10, 2)).toBe(5);
  expect(Calculator.divide(10, -2)).toBe(-5);

  expect(Calculator.divide("1", 1)).toBe(1);
});

test("Division", () => {
  expect(Calculator.multiply(1, 1)).toBe(1);
  expect(Calculator.multiply(10, 2)).toBe(20);
  expect(Calculator.multiply(10, -2)).toBe(-20);

  expect(Calculator.multiply("1", 1)).toBe(1);
});
