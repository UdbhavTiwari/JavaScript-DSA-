let arr = [2,45,3,6,7,6];
let answer = arr[0] ;
let i =0;
function LargestNum(arr){

    if(i>=arr.length-1) return

    if(arr[i]>answer){
        answer=arr[i];
    }
    
    i++;
    LargestNum(arr)

    
}
LargestNum(arr)

console.log(answer)