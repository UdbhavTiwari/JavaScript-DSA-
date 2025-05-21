let n = 6;
let array = [2, 1, 4, 6, 3];

// function findMissingElement(array, n) {
//   for (let i = 1; i <= n; i++) {
//     let missingfound = true;

//     for (let j = 0; j < array.length; j++) {
              
//                 if (i === array[j]) {
//                     missingfound = false;
//                     break;
//                 }
                

//     }


//     if(missingfound === true){
//         return i ;
//     }
//   }
// }


// console.log(findMissingElement(array,n))


// optimal solution 

function findMissing(array,n){

    let sum1= Math.floor((n*(n+1))/2);
    console.log(sum1)
    let sum2 =0;
    for (let i = 0; i < array.length; i++) {
        
        sum2+=array[i]
        
    }

    console.log(sum2)

    let missing = sum1-sum2;
    return missing;

}

console.log(findMissing(array,n));