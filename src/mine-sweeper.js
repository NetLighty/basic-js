const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper(matrix) {
  let resultMatrix=[]
  const flatedMatrix= matrix.flat(1).map((el, index, array)=>{
    let mines=0
    if(array[index-matrix[0].length]===true) mines++
    if(array[index-matrix[0].length-1]===true) mines++
    if(array[index-matrix[0].length+1]===true && index%matrix[0].length!==matrix[0].length-1 ) mines++
    if(array[index+matrix[0].length+1]===true) mines++
    if(array[index+matrix[0].length-1]===true) mines++
    if(array[index+matrix[0].length]===true) mines++
    if(array[index+1]===true) mines++
    if(array[index-1]===true) mines++
    return mines
  })
  console.log(flatedMatrix)
  let line=[]
  let lineLength=0
  flatedMatrix.forEach((el, index, array)=>{
    if(lineLength===matrix[0].length) {
      resultMatrix.push(line)
      line=[]
      line.push(el)
      lineLength=1
    }  
    else {
      lineLength++
      line.push(el)
      if(index===array.length-1) resultMatrix.push(line)
    } 
  })
  return resultMatrix
}

module.exports = {
  minesweeper
};
