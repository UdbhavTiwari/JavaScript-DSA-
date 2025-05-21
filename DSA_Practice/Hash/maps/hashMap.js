let arr = [
    1, 2, 3, 3, 2, 2, 1, 4, 5, 4, 5, 4, 6, 5, 65, 7, 6, 8, 6, 8, 67, 8, 9, 7, 9,9,9,9,9,9,9,9,9,9,,9,9,9,9,9,9,9,9,9,9,9,9,9,
    8, 9, 9, 0,
  ];
let mySet = new Set();

  let hashMap = {};

  for (let i = 0; i < arr.length; i++) {

    hashMap[arr[i]] = (hashMap[arr[i]] || 0) + 1

    mySet.add(hashMap[arr[i]]);
    
  }

  console.log(hashMap)
  console.log(mySet)
