const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {

  constructor(){
    this.currentDepth=1
    this.resultDepth=1
  }
  
  calculateDepth(arr) {
    for(let i in arr){
      if(Array.isArray(arr[i])){
        this.currentDepth++
        return this.calculateDepth(arr.flat(1))
      }
    }
    this.resultDepth=this.currentDepth
    this.currentDepth=1
    return this.resultDepth
  }
}

module.exports = {
  DepthCalculator
};
