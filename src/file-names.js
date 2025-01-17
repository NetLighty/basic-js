const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 function renameFiles(names) {
  let alreadyUsed= {}
  return names.map((el) =>{
    if(alreadyUsed[el]===undefined) {
     alreadyUsed[el]=1
     return el
    } else {
      alreadyUsed[el]++
      if(alreadyUsed[`${el}(${alreadyUsed[el]-1})`]===undefined){
        alreadyUsed[`${el}(${alreadyUsed[el]-1})`]=1
      } else alreadyUsed[`${el}(${alreadyUsed[el]-1})`]++
      console.log(alreadyUsed)
      return `${el}(${alreadyUsed[el]-1})`
    }
  })
}

module.exports = {
  renameFiles
};
