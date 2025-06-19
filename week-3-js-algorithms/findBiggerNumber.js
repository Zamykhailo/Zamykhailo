// Returns the larger of two numbers
function findBiggerNumber(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return firstNumber;
  } else {
    return secondNumber;
  }
}

console.log(findBiggerNumber(6, 7)); // 7
console.log(findBiggerNumber(5, 1)); // 5
console.log(findBiggerNumber(2, 2)); // 2