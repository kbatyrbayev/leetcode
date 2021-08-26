var commonChars = function (words) {
  let chars = [];
  let minStr = getMinStr();
  for (const char of minStr) {
    let bool = checkChar(char);
    if (bool) {
      chars.push(char);
    }
  }
  return chars;

  function checkChar(char) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.includes(char)) {
        words[i] = word.replace(char, '');
        count++;
      }
    }
    if (count === words.length) return true;
  }

  function getMinStr() {
    let min = words[0];
    for (const word of words) {
      if (min.length > word.length) min = word;
    }
    return min;
  }

};




console.log(commonChars(words = ["bella", "label", "roller"]));
console.log(commonChars(words = ["cool", "lock", "cook"]));