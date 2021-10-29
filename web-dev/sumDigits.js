function sumDigits(number) {
  const numbers = Math.abs(number).toString().split('').map(r => +r);
  return numbers.reduce((prev, cur) => prev + cur);
}

const sumDigits2 = number => Math.abs(number).toString().split('').map(el => +el).reduce((prev, cur) => prev+cur);


// console.log(sumDigits(99));
// console.log(sumDigits(12346));
console.log(sumDigits2(12346));