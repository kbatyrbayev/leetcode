/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let len = nums.length-1;
  for (let i = 0; i < k; i++) {
    const len_ = len - i;
    nums.unshift(nums[len_]);
  }
  for (let i = 0; i < k; i++) {
    const len_ = len - i;
    nums.splice(len_, 1);
  }
  return nums;
};

console.log(rotate(nums = [1,2,3,4,5,6,7], k = 3));
// console.log(rotate(nums = [-1,-100,3,99], k = 2));