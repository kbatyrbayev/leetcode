/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let len = Math.floor(Math.sqrt(c)) + 1;
  let left = 0;
  let right = len;
  console.log(len, 'len');
  while (left <= right) {
    let f = left ** 2 + right ** 2;
    if (f === c) {
      return true;
    }
    if (f > c) {
      right--;
    } else {
      left++;
    }
  }

  return false;
};

// console.log(judgeSquareSum(2147482647));
// console.log(judgeSquareSum(1));

// for (let i = 0; i <= 20; i++) {
//   console.log(judgeSquareSum(i), i);
// }

// console.log(judgeSquareSum(0), '0');
// console.log(judgeSquareSum(1), '1');
// console.log(judgeSquareSum(2), '2');
// console.log(judgeSquareSum(3), '3');
// console.log(judgeSquareSum(4), '4');
// console.log(judgeSquareSum(5), '5');
// console.log(judgeSquareSum(6), '6');
// console.log(judgeSquareSum(7), '7');
// console.log(judgeSquareSum(8), '8');
// console.log(judgeSquareSum(9), '9');
// console.log(judgeSquareSum(10), '10');