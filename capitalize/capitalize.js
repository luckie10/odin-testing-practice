const capitalize = (string) => {
  if (!(typeof string === "string")) throw new Error("String not provided!");

  return string.replace(/^\w/, string[0].toUpperCase());
};

export { capitalize as default };
