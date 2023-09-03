const reverseString = (string) => {
  if (!(typeof string === "string")) throw new Error("String not provided!");

  return string.split("").reverse().join("");
};

export { reverseString as default };
