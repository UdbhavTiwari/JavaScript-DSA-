let arr = [3,55,7,9,3,2,8,22];
let max=arr[0];
let secondMax=arr[0];



// for (let i = 0; i < arr.length; i++) {
//      if(max<arr[i]){
//         max=arr[i];
//      }
// }
// for (let i = 0; i < arr.length; i++) {
//     if(secondMax<arr[i]&& arr[i]!==max){
//        secondMax=arr[i];
//     }
// }

// console.log(secondMax);


// optimal approach 

for (let i = 0; i < arr.length; i++) {
   
    if(arr[i]>max){
        secondMax=max;
        max=arr[i]
    }
    else if (arr[i]<max && arr[i]>secondMax){
        secondMax=arr[i]
    }
    
}

console.log(secondMax)