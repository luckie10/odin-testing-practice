const Calculator = (() => {
  const isNumber = (num) => !isNaN(Number(num));

  const add = (x, y) => {
    if (!x || !y || !isNumber(x) || !isNumber(y))
      throw new Error("TypeError: a non-number was provided!");

    return Number(x) + Number(y);
  };

  const subtract = (x, y) => {
    if (!isNumber(x) || !isNumber(y))
      throw new Error("TypeError: a non-number was provided!");

    return Number(x) - Number(y);
  };

  const divide = (x, y) => {
    if (!isNumber(x) || !isNumber(y))
      throw new Error("TypeError: a non-number was provided!");

    return Number(x) / Number(y);
  };

  const multiply = (x, y) => {
    if (!isNumber(x) || !isNumber(y))
      throw new Error("TypeError: a non-number was provided!");

    return Number(x) * Number(y);
  };

  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();

export default Calculator;
