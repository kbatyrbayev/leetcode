/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let low = 1;
  let high = n;
  while (low <= high) {
    let mid = Math.floor((high+low)/2);
    const guess_ = guess(mid);
    if (guess_ === -1) high = mid - 1;
    if (guess_ === 1) low = mid + 1;
    if (guess_ === 0) return mid;
  }
  return low;
};

var guess = function (num) {
  console.log(num, 'num')
  if (num === 6) return 0;
  if (num > 6) return 1;
  if (num < 6) return -1;
}

console.log(guessNumber(10));