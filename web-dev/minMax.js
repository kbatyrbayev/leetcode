function minMax(arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  return [min, max];
}

// ES6

const minMax2 = arr => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([2,9,10,11,100]));
console.log(minMax2([2,9,10,11,100]));