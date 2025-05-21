//  let arr = [ 2,0,3,6,0,5,6,7,0,5];


//  function moveZero(arr){

//     let last = arr.length
//     let count=0;
//         for (let  i = 0;  i < last;  i++) {

//                 if(arr[i]===0){
//                     for (let j = i; j < arr.length; j++) {
//                         arr[j] =arr[j+1];
                        
//                     }
//                     count++
//                 }
                    


                
//             }
            
//             for(let k = arr.length-1;k>arr.length-count-1;k--){
//                    arr[k]= 0
//             }


//  }


//  moveZero(arr)

//  console.log(arr);
//  console.log(arr.length)


//Optimal approach


let arr = [1,2,0,4,5,6,8,9,0,0,0,4,3,2,0,0,7,56,43];

let j =-1;
function moveZero(arr){

    for (let i = 0; i < arr.length; i++) {
       
        if(arr[i]===0){
            j=i;
            break;
        }
        

    }
        for(let i = j+1;i<arr.length;i++){


            if(arr[i]!==0){
                [arr[j],arr[i]]= [arr[i],arr[j]]
                j++
            }


        }


}
moveZero(arr);
console.log(arr);