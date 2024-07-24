// 0x00-ES6_basic/10-loops
export default function appendToEachArrayValue (array, appendString) {
  const result = [];
  for (const value of array) {
    result.push(appendString + value);
  }

  return result;
}
