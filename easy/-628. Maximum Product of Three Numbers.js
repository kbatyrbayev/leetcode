/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  nums = nums.sort((a,b) => {b-a});
  return Math.max(nums[0] * nums[1] * nums[nums.length - 1], nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]);
};

// console.log(maximumProduct(nums = [1,2,3,4]));
// console.log(maximumProduct([-100,-98,-1,2,3,4]));
// console.log(maximumProduct([-100,-2,-3,1]));
// 