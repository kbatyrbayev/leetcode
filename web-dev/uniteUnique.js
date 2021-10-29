const uniteUnique = (...args) => {
  let set = new Set();
  args.forEach(arg => {
    arg.forEach(a => {
      set.add(a);
    });
  });
  let res = [];
  set.forEach(s => {
    res.push(s);
  });
  return res;
}

function uniteUnique2() {
  const arr = [...arguments];
  let set = new Set();
  arr.forEach(a => {
    set.add(...a);
  });
  return [...set];
}

function uniteUnique3() {
  const arr = [...arguments];
  const newArr = [];
  arr.forEach(a => {
    newArr.push(...a);
  });
  console.log(newArr);
  return [...new Set(newArr)];
}

const uniteUnique4 = (...args) => [...new Set(args.flat())];



// console.log(uniteUnique([1,2,3], [4,1,5], [6,7,8,5]));
// console.log(uniteUnique4([1], [2], [3,2,2], [4,1,1,2]));
// console.log(...new Set([4,1,1,2]));