var repeatedStringMatch = function(a, b) {
  let num = Math.ceil(b.length / a.length);
  if (a.repeat(num).includes(b)) return num;
  if (a.repeat(num+1).includes(b)) return num+1;
  return -1;
};

console.log(repeatedStringMatch(a = "abcd", b = "cdabcdab"));
console.log(repeatedStringMatch(a = "a", b = "aa"));
console.log(repeatedStringMatch(a = "abc", b = "wxyz"));
