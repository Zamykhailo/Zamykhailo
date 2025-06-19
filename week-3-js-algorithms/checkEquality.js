// Checks strict equality between two values
function checkEquality(a, b) {
  return a === b;
}

console.log(checkEquality(1, true)); // false
console.log(checkEquality(0, "0"));  // false
console.log(checkEquality(1, 1));    // true