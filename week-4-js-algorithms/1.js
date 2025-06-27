function findLongestString(arr) {
  return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"