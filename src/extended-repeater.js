const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if(!options.repeatTimes) return str+options.addition
  let strings=[]
  let additions=[]
  const string= String(str)
  const repeatTimes= options.repeatTimes ? options.repeatTimes : 1
  const separator= options.separator ? String(options.separator) : '+'
  const addition= options.addition!==undefined ? String(options.addition) : ''
  const additionRepeatTimes= options.additionRepeatTimes ? options.additionRepeatTimes : 1
  const additionSeparator= options.additionSeparator ? String(options.additionSeparator) : '|'
 for(let i=0; i<additionRepeatTimes; i++){
   additions.push(addition)
 }
 for(let i=0; i<repeatTimes; i++){
   strings.push(`${string}`+`${additions.join(additionSeparator)}`)
 }
 return strings.join(separator)
}

module.exports = {
  repeater
};
