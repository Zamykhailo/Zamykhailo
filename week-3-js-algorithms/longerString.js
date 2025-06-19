// Returns the longer of two strings
function longerString(stringOne, stringTwo) {
  if (stringOne.length > stringTwo.length) {
    return stringOne;
  } else {
    return stringTwo;
  }
}

console.log(longerString('codemify', 'test'));          // codemify
console.log(longerString('automation', 'coding'));      // automation
console.log(longerString('automation', 'the codemify')); // the codemify