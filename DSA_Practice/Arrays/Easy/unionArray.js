let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2];


function unionArray(arr1, arr2) {
  let union = [];
  let i = 0;
  let j = 0;
  let counter = -1;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (arr1[i] !== union[counter]) {
        union.push(arr1[i]);
        counter++;
      }
      i++;
    } else {
      if (arr2[j] !== union[counter]) {
        union.push(arr2[j]);
        counter++;
      }
      j++;
    }
  }

}



function unionArraySet(arr1,arr2) {
    
    let union =new Set([...arr1,...arr2]);
    
    return Array.from(union).sort((a,b) => a-b );
    
    
    
}
console.log(unionArraySet(arr1, arr2));