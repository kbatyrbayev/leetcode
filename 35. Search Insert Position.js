/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
   let ind = nums.indexOf(target);
   if (ind !== -1) return ind;
   for (let i = 0; i < nums.length; i++) {
     const element = nums[i];
     if (element > target) return i;
   }
   return nums.length;
};


// console.log(searchInsert(nums = [1,3,5,6], target = 5));
// console.log(searchInsert(nums = [1,3,5,6], target = 2));
// console.log(searchInsert(nums = [1,3,5,6], target = 7));
// console.log(searchInsert(nums = [1,3,5,6], target = 0));
// console.log(searchInsert(nums = [1], target = 0));
