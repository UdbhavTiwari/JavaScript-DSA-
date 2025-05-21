
const arr = [1,2,3,4,5,6,7,8,9];

// Function to rotate array
let tempArr =[];
function rotateArray(arr, k) {
    // Your code here
    k= k%arr.length
    for(let i=0 ; i<k;i++){
        tempArr.push(arr[i])
    }
    
    for(let i = k ; i < arr.length;i++){
            
            arr[i-k] = arr[i];                  // shifting 
        
    }
    
    for( let i = arr.length-k ; i<arr.length;i++){
        
        arr[i]= tempArr[i-(arr.length-k)]                   // adding the elemetns to the end 
    }
}

// Test the function
rotateArray(arr,10);

console.log(arr);

