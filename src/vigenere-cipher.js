const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(bool) {
    if(bool===false) this.type='reverse'
    else this.type='direct'
    this.mod = (n,m) => (n % m + m) % m
    this.table= ["A","B","C","D","E",
 "F","G","H","I","J","K","L","M",
 "N","O","P","Q","R","S","T","U",
 "V","W","X","Y","Z"] 
  }

  encrypt(message, key) {
    if(!message || !key || typeof message!=='string' || typeof key!=='string') throw new Error('Incorrect arguments!')
    let charIndex=-1
    let encryptedMessage= message.toUpperCase().split('').map((el)=>{
      if(this.table.indexOf(el)===-1) return el
      charIndex++
      return this.table[this.mod((this.table.indexOf(el)+this.table.indexOf(key.toUpperCase()[charIndex%key.length])),this.table.length)]
    }).join('') 
    return this.type==='direct' ? encryptedMessage : encryptedMessage.split('').reverse().join('')
  }
  
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key || typeof encryptedMessage!=='string' || typeof key!=='string') throw new Error('Incorrect arguments!')
    let charIndex=-1
    let message= encryptedMessage.toUpperCase().split('').map((el)=>{
      console.log('el: '+el+' -- '+String(this.table.indexOf(el)))
      if(this.table.indexOf(el)===-1) return el
      charIndex++
      console.log('key[charindex]: '+String(this.table.indexOf(key.toUpperCase()[charIndex%key.length]))+
  ' -- '+String(this.table[this.table.indexOf(key.toUpperCase()[charIndex%key.length])]))
      return this.table[Math.abs(this.mod((this.table.indexOf(el)-this.table.indexOf(key.toUpperCase()[charIndex%key.length])),this.table.length))]
    }).join('')
    return this.type==='direct' ? message : message.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
