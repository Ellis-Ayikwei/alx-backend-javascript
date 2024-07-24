// 0x00-ES6_basic/10-loops
export default function appendToEachArrayValue(array, appendString) {
    let result = []
    for (let value of array) {
      result.push(appendString + value)
    }
  
    return result;
  }
