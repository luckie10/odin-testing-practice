function analyzeArray(array) {
  if (!Array.isArray(array))
    throw new Error("Provided parameter is not an array");

  return {
    average: array.reduce((prev, next) => prev + next, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export default analyzeArray;
