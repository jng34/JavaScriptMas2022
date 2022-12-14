function countVowelConsonant(str) {
  const vowels = 'aeiou';
  let total = 0;
  for (let char of str) {
      if (vowels.includes(char)) {
          total += 1;
      } else {
          total += 2;
      }
  }
  return total;
}

// Short One-liner
function countVowelConsonant(str) {
  return [...str].reduce((acc, curr) => acc += curr.match(/[aeiou]/gi) ? 1 : 2, 0)
}

console.log(countVowelConsonant('amazing'))