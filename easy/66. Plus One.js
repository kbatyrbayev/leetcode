/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length - 1;
  for(let i = len; i >= 0; i--) {
    let elem = digits[i];
    if (elem < 9) {
      digits[i]++;
      break;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
    }
  }
  return digits;
};

console.log(plusOne(digits = [9, 9,9]));
// console.log(plusOne(digits = [1, 2, 3]));
// console.log(plusOne(digits = [4,3,2,1]));
// console.log(plusOne(digits = [0]));
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));