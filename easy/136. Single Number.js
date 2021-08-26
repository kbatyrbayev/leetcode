/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    if (!obj[elem]) obj[elem] = [];
    obj[elem].push(elem);
  }
  for (const iterator in obj) {
    if (obj[iterator].length === 1) {
      return iterator;
    }
  }
};

console.log(singleNumber(nums = [2,2,1]));