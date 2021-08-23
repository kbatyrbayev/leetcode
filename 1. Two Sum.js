var twoSum = function (nums, target) {
  if (nums.length === 2) {
    return [0, 1];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
          break;
        }
      }
    }
  }
};