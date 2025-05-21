// let number = 36 ;

// for (let i = 1; i <= number; i++) {

//     if(number%i === 0){
//         console.log(i)
//     }
 
    
// }



// Optimal way -->

let number = 222334565193649 ;
let arr = [];
for (let i = 1; i <= Math.sqrt(number); i++) {

    if(number%i === 0){
        arr.push(i);
        if(i !== number/i){
            arr.push(number/i)
         }
            
        }
    }

arr.sort((a,b) => a-b);

console.log(arr)