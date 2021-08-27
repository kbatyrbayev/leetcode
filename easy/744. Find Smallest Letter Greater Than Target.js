/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  for (const letter of letters) {
    if (letter > target) {
      return letter;
    }
  }
  return letters[0];
};

// console.log(nextGreatestLetter(letters = ["c","f","j"], target = "a"));
// console.log(nextGreatestLetter(letters = ["c","f","j"], target = "c"));
// console.log(nextGreatestLetter(letters = ["c","f","j"], target = "d"));
// console.log(nextGreatestLetter(letters = ["c","f","j"], target = "g"));
console.log(nextGreatestLetter(letters = ["c","f","j"], target = "j"));
console.log(nextGreatestLetter(letters = ['a', 'b'], target = "z"));