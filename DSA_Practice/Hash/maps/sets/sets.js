let arr = [
  1, 2, 3, 3, 2, 2, 1, 4, 5, 4, 5, 4, 6, 5, 65, 7, 6, 8, 6, 8, 67, 8, 9, 7, 9,
  8, 9, 9, 0,
];
arr.sort((a, b) => a - b);

let diffArray = new Set();

for (let i = 0; i < arr.length; i++) {
  diffArray.add(arr[i]);
}

console.log(diffArray);
