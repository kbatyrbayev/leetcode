/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let str = s.split(' ').filter(f => f !== '');
  return str[str.length -1].trim().length;
};

console.log(lengthOfLastWord(s = "Hello World"));
console.log(lengthOfLastWord(s = "   fly me   to   the moon  "));