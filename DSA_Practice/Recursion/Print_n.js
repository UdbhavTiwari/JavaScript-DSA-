
//  let n = 4
//  let i=1;
// function printN() {

//     if(i>n){
//         return;
//     }
//     console.log(`This is ${i}th time and n is ${n}`);
//     i++;
// printN();
// }

// printN();


// print n to 1 

// let n = 15;

// function print(){

//     if(n<1){
//         return
//     }
//     console.log(n);
//     n--;
//     print();
// }
// print();


// sum of first n numbers

let n =3 ;

let addition =0
function sum(){

    if(n<1){
        return addition;
    }

    addition=addition+n;
    n--;
     return sum();
}

console.log(sum());