/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    let guess = nums[mid];
    if (guess === target) {
      return mid;
    }
    if (guess > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search(nums = [-1,0,3,5,9,12], target = 9));
console.log(search(nums = [-1,0,3,5,9,12], target = 2));