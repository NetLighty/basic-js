const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 let chainMaker = {
  elements: [],
  getLength: function() {
    return this.elements.length
  },
  addLink: function(value) {
    this.elements.push(value)
    return this
  },
  removeLink: function(position) {
    if(this.elements[position-1]===undefined){
      this.elements=[]
      throw new Error(`You can't remove incorrect link!`)
    }
    this.elements.splice(position-1, 1)
    return this
  },
  reverseChain: function() {
    this.elements.reverse()
    return this
  },
  finishChain: function() {
    const chain= this.elements.map((el, index, array)=>{
      if(index===0) return '( '+el+' )'
      if(index===array.length-1) return '~~( '+el+' )'
      return '~~( '+el+' )'
    }).join('')
    this.elements=[]
    return chain
  }
}

module.exports = {
  chainMaker
};
