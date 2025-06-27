function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(palindrome('racecar')); // true
console.log(palindrome('hello')); // false
console.log(palindrome('a')); // true
console.log(palindrome('madam')); // true