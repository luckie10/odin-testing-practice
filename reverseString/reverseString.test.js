import reverseString from "./reverseString.js";

test("Throw error when no string is provided", () => {
  expect(() => reverseString()).toThrow(Error);
  expect(() => reverseString()).toThrow("String not provided!");
});

test("String is in reverse", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("String is in reverse with spaces", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});
