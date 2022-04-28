const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  return Math.max.apply(null, String(n).split('').map((el, index, array)=>{
    return  Number(array.filter((el1, index1) => index!==index1).join(''))
  }))
}

module.exports = {
  deleteDigit
};
