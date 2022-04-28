const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`)
  if(!arr.includes('--double-next') && arr.includes('--double-prev') && arr.includes('--discard-prev') && arr.includes('--discard-next')) return arr
  return arr.map((el,index,array)=>{
    if (el==='--double-next' && array[index+1]) return array[index+1]
    if (el==='--double-prev' && array[index-1]) return array[index-1]
    if (array[index+1]==='--discard-prev') {array[index]='toDelete'; return 'toDelete'}
    if (array[index-1]==='--discard-next') {array[index]='toDelete'; return 'toDelete'}
    return el
  }).filter(el=>{
    if(el==='--double-next' || el==='--double-prev' || el==='toDelete' || el==='--discard-prev' || el==='--discard-next') return false
    return true
  })
}

module.exports = {
  transform
};
