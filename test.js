/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let c = Math.abs(deviation(nums.filter(f => f != nums[i])));
    res[i] = c ? c : 0;
  }
  return res;
};

function deviation() {
  let arr = Array.prototype.slice.call(arguments[0]);
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res *= arr[i];
  }
  return res;
}

/* console.log(productExceptSelf(nums = [1, 2, 3, 4]));
console.log(productExceptSelf(nums = [-1,1,0,-3,3])); */
// console.log(productExceptSelf([0,0]));
console.log(productExceptSelf([1,1]));