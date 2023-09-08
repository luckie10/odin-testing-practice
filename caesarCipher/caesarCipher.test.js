import caesarCipher from "./caesarCipher.js";

test("Single letter shifting", () => {
  expect(caesarCipher("a", 2)).toBe("c");
  expect(caesarCipher("a", 5)).toBe("f");
  expect(caesarCipher("a", 10)).toBe("k");
  expect(caesarCipher("f", -5)).toBe("a");
});

test("Wrapping z to a, and a to z", () => {
  expect(caesarCipher("y", 2)).toBe("a");
  expect(caesarCipher("y", 5)).toBe("d");
  expect(caesarCipher("y", 10)).toBe("i");
  expect(caesarCipher("d", -5)).toBe("y");
});

test("Case sensitive", () => {
  expect(caesarCipher("Ay", 2)).toBe("Ca");
  expect(caesarCipher("Ay", 5)).toBe("Fd");
  expect(caesarCipher("Ay", 10)).toBe("Ki");
  expect(caesarCipher("Df", -5)).toBe("Ya");
});

test("Single word shifting", () => {
  expect(caesarCipher("Hello", 2)).toBe("Jgnnq");
  expect(caesarCipher("Hello", 5)).toBe("Mjqqt");
  expect(caesarCipher("Hello", 10)).toBe("Rovvy");
  expect(caesarCipher("Hello", -5)).toBe("Czggj");
});

test("Full sentence shifting", () => {
  expect(caesarCipher("Hello world", 2)).toBe("Jgnnq yqtnf");
  expect(caesarCipher("Hello world", 5)).toBe("Mjqqt btwqi");
  expect(caesarCipher("Hello world", 10)).toBe("Rovvy gybvn");
  expect(caesarCipher("Hello world", -5)).toBe("Czggj rjmgy");
});

test("Sentence shifting with puncuation", () => {
  expect(caesarCipher("Hello world!", 2)).toBe("Jgnnq yqtnf!");
  expect(caesarCipher("Hello world!", 5)).toBe("Mjqqt btwqi!");
  expect(caesarCipher("Hello world!", 10)).toBe("Rovvy gybvn!");
  expect(caesarCipher("Hello world!", -5)).toBe("Czggj rjmgy!");

  expect(caesarCipher("Hello world! It's nice to meet you.", 10)).toBe(
    "Rovvy gybvn! Sd'c xsmo dy wood iye."
  );
});
