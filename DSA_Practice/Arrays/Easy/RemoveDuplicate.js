let arr = [0,1,1,2,2,3,3,4,5,6,6,6,7,7,7,8,8,8,9,9,9,]

function removeDuplicate(arr){

    let unique=0;
    let counter =1

    while(counter<arr.length){

        if(arr[unique]!==arr[counter]){
           arr[unique+1]= arr[counter];
           unique++;
           
        }
        counter++
    
 
}
return unique+1
}

removeDuplicate(arr);

console.log(arr);