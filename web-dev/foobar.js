function fooBar(number) {
  let res = [];
  for (let i = 1; i <= number; i++) {
    if(i%3 === 0 && i%5 ===0) res.push('foobar');
    else if(i%3 === 0) res.push('foo');
    else if(i%5 === 0) res.push('bar')
    else res.push(i);
  }
  console.log(res.join('-'));
}

fooBar(15);