var repeatedSubstringPattern = function (str) {
  let half = str.length / 2;
  for (let i = 1; i <= half; i++) {
    let elem = str.slice(0, i);
    let arr = splitStr(str, i);
    let bool = arr.every(ev => {return ev === elem});
    if (bool) return bool;
  }
  return false;
};

function splitStr(str, index) {
  var chunks = [];
  for (var i = 0, charsLength = str.length; i < charsLength; i += index) {
      chunks.push(str.substring(i, i + index));
  }
  return chunks;
}

console.log(repeatedSubstringPattern(str = "abab"));
console.log(repeatedSubstringPattern(str = "aba"));
console.log(repeatedSubstringPattern(s = "abcabcabcabc"));
console.log(repeatedSubstringPattern("babbabbabbabbab"));
