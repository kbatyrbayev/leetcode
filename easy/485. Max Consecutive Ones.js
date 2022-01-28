var findMaxConsecutiveOnes = function (nums) {
  let count = 0, maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    if (nums[i] === 0 || i === nums.length - 1) {
      if (count > maxCount) maxCount = count;
      count = 0;
    }
  }
  return maxCount;
};

// const res = maxConsecutiveOnes([1,1,0,1,1,1,0,0,0,0]);
// const res = maxConsecutiveOnes([1,1,0,1,1,1]);
const res = findMaxConsecutiveOnes([1,0,1,1,0,1]);
// const res = maxConsecutiveOnes([0]);

console.log(res, 'res');