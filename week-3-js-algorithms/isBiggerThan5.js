// Returns true if the number is greater than 5, otherwise false
function isBiggerThanFive(number) {
  if (number > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isBiggerThanFive(6)); // true
console.log(isBiggerThanFive(5)); // false
console.log(isBiggerThanFive(4)); // false
console.log(isBiggerThanFive(1)); // false