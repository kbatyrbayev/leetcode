/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let obj = {};
  indices.forEach((ind, i) => {
    obj[ind] = s[i];
  });
  return Object.values(obj).join('');
};


console.log(restoreString(s = "codeleet", indices = [4,5,6,7,0,2,1,3]));
console.log(restoreString(s = "abc", indices = [0,1,2]));