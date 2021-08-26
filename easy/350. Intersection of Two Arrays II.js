var intersect = function(nums1, nums2) {
  let minNums = nums1, maxNums = nums2;
  if (nums1.length > nums2.length) {
    maxNums = nums1;
    minNums = nums2;
  }
  let res = [];
  for (const num of minNums) {
    let ind = maxNums.indexOf(num);
    if (ind !== -1) {
      res.push(num);
      maxNums.splice(ind, 1);
    }
  }
  return res;
};

console.log(intersect(nums1 = [1,2,2,1], nums2 = [2,2]));
console.log(intersect(nums1 = [4,9,5], nums2 = [9,4,9,8,4]));