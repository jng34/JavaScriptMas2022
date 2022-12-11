/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/  

function altCaps(str){
  let newStr = '';
  let capitalize = true;
  for (let char of str) {
      if (capitalize) {
          newStr += char.toUpperCase();
          capitalize = !capitalize;
      } else {
          newStr += char.toLowerCase();
          capitalize = !capitalize;
      }
  }
  return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));