
// first version
function isPalindrome(str) {
  const reverseStr = str.split('').reverse().join('');
  if (str === reverseStr) return true;
  return false;
}

// section version is Advanced
function isPalindrome2(str) {
  return str === str.split('').reverse().join('');
}

// ES6 version
const isPalindrome3 = str => str === str.split('').reverse().join('');


console.log(isPalindrome3('kazak'));
console.log(isPalindrome3('тест'));
console.log(isPalindrome3('шалаш'));