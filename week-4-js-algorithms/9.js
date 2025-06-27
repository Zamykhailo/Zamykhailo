function findLongestWord(str) {
  if (!str) return 0;
  const words = str.split(" ");
  return words.reduce((max, word) => Math.max(max, word.length), 0);
}
console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7