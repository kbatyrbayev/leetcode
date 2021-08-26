/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res = [-1, -1];
  res[0] = binarySearch(nums, target, true);
  if (res[0] === -1) return res;
  res[1] = binarySearch(nums, target, false);
  return res;
};

function binarySearch(nums, target, flag) {
  let low = 0;
  let high = nums.length - 1;
  let res = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let guess = nums[mid];
    if (target < guess) {
      high = mid - 1
    } else if  (target > guess){
      low = mid + 1
    } else {
      res = mid;
      if (flag) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

  }
  return res;
}

console.log(searchRange(nums = [5, 7, 7, 8, 8, 10], target = 8));
// console.log(searchRange(nums = [5, 7, 7, 8, 10], target = 8));
// console.log(searchRange(nums = [5, 7, 7, 8, 8, 10], target = 6));
// console.log(searchRange(nums = [], target = 0));
console.log(searchRange([1], 1));
console.log(searchRange([2,2], 2));