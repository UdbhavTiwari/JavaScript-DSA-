let arr = [3, 5,1, 6, 7, 23, 2];

for (let i = 0; i <= arr.length-1; i++) {


  let smallest_index = i ;
  let smallest_number = arr[i]
  
  for ( j = i+1; j <= arr.length-1; j++) {
    if (arr[j] < smallest_number) {
      smallest_index = j;
      smallest_number=arr[j]
    }
  }
        [arr[i],arr[smallest_index]]= [arr[smallest_index],arr[i]]

}

console.log(arr)