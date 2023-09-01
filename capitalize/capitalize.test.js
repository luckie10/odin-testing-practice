import capitalize from "./capitalize.js";

test("Capitalize first letter", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

test("Capitalize first letter when pass multiple words", () => {
  expect(capitalize("hello world")).toMatch("Hello world");
});

test("Throw error when no string is provided", () => {
  expect(() => capitalize()).toThrow(Error);
  expect(() => capitalize()).toThrow("String not provided!");
});
