// a = 97, z = 122
// A = 65, Z = 90
function shiftCharCode(code, amount) {
  let newCode = code + amount;
  let low;
  let high;

  if (code >= 97 && code <= 122) {
    low = 97;
    high = 122;
  } else if (code >= 65 && code <= 90) {
    low = 65;
    high = 90;
  } else return code;

  if (newCode < low) newCode = newCode - low + high + 1;
  else if (newCode > high) newCode = newCode - high + low - 1;

  return newCode;
}

function caesarCipher(string, key) {
  const stringCharCode = [...string].map((char) => {
    return shiftCharCode(char.charCodeAt(0), key);
  });

  return String.fromCharCode(...stringCharCode);
}

export default caesarCipher;
