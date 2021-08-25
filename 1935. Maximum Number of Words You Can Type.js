/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let arr = text.split(' ');
  brokenLetters = brokenLetters.split('');
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    for (let j = 0; j < brokenLetters.length; j++) {
      const letter = brokenLetters[j];
      if (str.includes(letter)) {
        c++;
        break;
      }
    }
  }
  return arr.length - c;
};

console.log(canBeTypedWords(text = "hello world", brokenLetters = "ad"));
console.log(canBeTypedWords(text = "leet code", brokenLetters = "lt"));
console.log(canBeTypedWords(text = "leet code", brokenLetters = "e"));