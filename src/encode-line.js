const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let currentChar=str[0]
  let currentCount= 0
  let returnChar= str[0]
  let returnCount= 0
  return str.split('').map((el, index, array)=>{
    if(currentChar===array[index+1]) {
      currentCount++
      return ''
    } else {
      currentCount++
      returnChar=el
      returnCount=currentCount
      currentChar=array[index+1]
      currentCount=0
      return returnCount!==1 ? `${returnCount}${returnChar}` : `${returnChar}`
    }
  }).join('')
}

module.exports = {
  encodeLine
};
