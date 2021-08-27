/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

  let res = {};
  for (let i = 0; i < nums1.length; i++) {
    const elem1 = nums1[i];
    for (let j = 0; j < nums2.length; j++) {
      const elem2 = nums2[j];
      if (elem1 === elem2) {
        res[elem1] = {};
      }
    }
  }
  return Object.keys(res).map(r => +r);
};


console.log(intersection(nums1 = [1,2,2,1], nums2 = [2,2]));
console.log(intersection(nums1 = [4,9,5], nums2 = [9,4,9,8,4]));