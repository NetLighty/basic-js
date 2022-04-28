const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnses={}
  for(let domain of domains){
    let domainsNumber= domain.split('.').length
    for(let i= 0; i<domainsNumber; i++){
      const dns='.'+domain.split('.').reverse().slice(0, i+1).join('.')
        if(dnses[dns]===undefined)dnses[dns]=1
      else dnses[dns]++
    }
  }
  return dnses
}

module.exports = {
  getDNSStats
};
