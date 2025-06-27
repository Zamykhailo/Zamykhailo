function findLargestNumber(arr) {
  return Math.max(...arr);
}
console.log(findLargestNumber([1, 2, 3, 4, 5])); // 5
console.log(findLargestNumber([-1, -2, -3])); // -1
console.log(findLargestNumber([10, 20, 30, 40, 50])); // 50