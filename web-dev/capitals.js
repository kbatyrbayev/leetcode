function capitals(string) {
  const letters = string.split('');
  const res = [];
  letters.forEach((letter, i) => {
    if (letter.charCodeAt() < 97) {
      res.push(i)
    }
  });

  return res;
}


// ES6

const capitals2 = string =>
  string.split('').reduce((result, cur, index) => {
    if (cur === cur.toUpperCase()) result.push(index)
    return result;
  }, [])

console.log(capitals2('CodEWaRs'));
// console.log(capitals2('justForTest'));
