let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    if (!obj[elem]) obj[elem] = [];
    obj[elem].push(elem);
  }
  let res = [];
  for (const iterator in obj) {
    if (obj[iterator].length === 1) {
      res.push(+iterator);
    }
  }
  return res;