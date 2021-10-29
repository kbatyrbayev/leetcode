
// Base
function accum(string) {
  const letters = string.toLowerCase().split('');
  let res = '';
  letters.forEach((letter, i) => {
    res+= capitalize(letter.repeat(i+1))+'-';
  });

  return res;

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}


// second Base
function accum2(string) {
  const letters = string.toUpperCase().split('');
  let res = letters.map((letter, i) => {
    return letter+letter.repeat(i).toLowerCase();
  });

  return res.join('-');
}

// console.log(accum2('abcd'));
// console.log(accum('cwAt'));

// ES6
const accum3 = string => 
      string
      .toUpperCase()
      .split('')
      .map((letter, i) => `${letter}${letter.repeat(i).toLowerCase()}`).join('-')


console.log(accum3('abcd'));
