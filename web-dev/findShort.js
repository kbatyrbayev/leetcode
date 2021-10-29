// Base
function findShort(text) {
  let map = {};
  text.split(' ').forEach(element => {
    if (!map[element.length]) {
      map[element.length] = element;
    }
  });
  return map[Object.keys(map)[0]];
}

// Base
function findShort2(string) {
  const words = string.split(' ');
  const sortedWords = words.sort((a, b) => a.length - b.length);
  return sortedWords[0];
}

// Advanced
function findShort3(string) {
  return string
        .split(' ')
        .sort((a, b) => {
          return a.length - b.length;
        })[0];
}

// ES6
const findShort4 = str => str.split(' ').sort((a, b) => a.length - b.length )[0];


console.log(findShort2('The smallest word in sentence'));
// console.log(findShort2('Just test string'));