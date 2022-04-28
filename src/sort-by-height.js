const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  const sortedWithoutEceptions= arr.filter(el => el!==-1).sort( (a,b)=> a-b)
  let result= []
  let exceptionIndexes= []
  arr.forEach((el,index)=>{
    if(el===-1) exceptionIndexes.push(index)
  })
  for(let i=0; i<arr.length; i++){
    if(exceptionIndexes.includes(i)) result.push(-1)
    else {
      result.push(sortedWithoutEceptions[0])
      sortedWithoutEceptions.splice(0,1)
    }
  }
  return result
}

module.exports = {
  sortByHeight
};
