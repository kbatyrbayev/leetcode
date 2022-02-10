/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let maxLen = Math.max(a.length, b.length);
  a = prepareStr(a);
  b = prepareStr(b);
  let carry = 0, res = '';
  for (let i = a.length - 1; i >= 0; i--) {
    let sum = +a[i] + (+b[i]) + carry;
    if (sum === 0) {
      res = '0'+res;
      carry = 0;
    }
    if (sum === 1) {
      res = '1'+res;
      carry = 0;
    }
    if (sum === 2) {
      res = '0'+res;
      carry = 1;
    }
    if (sum === 3) {
      res = '1'+res;
      carry = 1;
    }
  }
  return carry > 0 ? ('1' + res) : res;

  function prepareStr(str) {
    if (maxLen > str.length) {
      let strLen = maxLen-str.length;
      for (let i = 0; i < strLen; i++) {
        str = '0' + str;
      }
    }
    return str;
  }
};

/* addBinary('111', '001');
addBinary('11', '01'); */
// let r = addBinary('10', '10');
// let r = addBinary('111', '1');
// let r = addBinary('11', '1');
let r = addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
"110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011");

// let r = addBinary('100', '110010');
console.log(r, 'res');

// addBinary(a = "1010", b = "1011");

