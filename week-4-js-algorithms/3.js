function findDollarStrings(arr) {
  return arr.filter(str => str.includes("$"));
}
console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []