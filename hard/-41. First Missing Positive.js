/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a-b).filter(onlyUnique);
  for (let i = 1; i <= nums.length+1; i++) {
    if (nums[i-1] !== i) {
      return i;
    }
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index && value > 0;
  }
};


// console.log(missingNumber(nums = [0,2,2,1,1]));
// console.log(missingNumber(nums = [1]));
// console.log(missingNumber(nums = [1,2,0]));
// console.log(missingNumber(nums = [3,4,-1,1]));
// console.log(missingNumber(nums = [7,8,9,11,12]));
// console.log(missingNumber(nums = [9,6,4,2,3,5,7,0,1]));
// console.log(missingNumber(nums = [0]));