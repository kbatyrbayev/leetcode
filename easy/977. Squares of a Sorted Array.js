/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  console.log(nums);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    res.push(element**2);
  }
  return res.sort((a,b) => {return a-b});
};

console.log(sortedSquares(nums = [-4,-1,0,3,10]));