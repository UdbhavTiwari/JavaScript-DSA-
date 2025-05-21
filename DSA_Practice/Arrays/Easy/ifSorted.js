let arr=[3,4,5,6,7,8,9,10 ,0]

let ifSorted = true;

for (let i = 0; i < arr.length-1; i++) {
        
    if(arr[i]>arr[i+1]){
        ifSorted=false;
    }

}
console.log(ifSorted)