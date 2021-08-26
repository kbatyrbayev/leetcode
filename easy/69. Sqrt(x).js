/**
 * @param {number} x
 * @return {number}
 */

/* 
if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
*/
var mySqrt = function (x) {
  let low = 1;
  let high = Math.floor(x/2) + 1;
  while(low <= high) {
    let mid = Math.floor((low+high)/2);
    let guess = mid*mid;
    if (guess > x) {
      high = mid - 1;
    } else {
      low = mid + 1
    }
    if (guess === x) {
      return mid;
    }
  }
  return high;
};

console.log(mySqrt(1));