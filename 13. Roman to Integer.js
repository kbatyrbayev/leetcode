let obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

let arr = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'].reverse();

var romanToInt = function (s) {
  let res = 0;
  arr.forEach(a => {
    let index = s.search(a);
    if (index > -1) {
      s = s.replace(a, '');
      res += obj[a[1]] - obj[a[0]];
    }
  });
  for (let key in s) {
    res += obj[s[key]];
  }
  return res;
};