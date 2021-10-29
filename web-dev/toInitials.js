function toInitials(string) {
  return string.split(' ').map(elem => `${elem.slice(0,1).toUpperCase()}.`).join('');
}

const toInitials2 = string => string.split(' ').map(elem => `${elem.slice(0,1).toUpperCase()}.`).join('');

console.log(toInitials('Bill Gates'));
console.log(toInitials2('elon mask'));