/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while(left <= right) {
    let guess = numbers[left]+ numbers[right];
    if (guess === target) {
      return [left+1, right+1];
    }
    if (guess > target) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return false;

};

console.log(twoSum(numbers = [2,7,11,15], target = 9));
console.log(twoSum(numbers = [2,3,4], target = 6));
console.log(twoSum(numbers = [-1,0], target = -1));
