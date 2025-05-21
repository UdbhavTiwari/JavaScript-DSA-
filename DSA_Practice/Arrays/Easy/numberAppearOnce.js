let arr =  [2,5,5,7,7,8,8,5,5,4,2,4,6,6,7,8,9,7,8,9,21,4,4,5,5] ; 

function noPair(arr){
    
    for (let i = 0; i < arr.length; i++) {
        let singleFound =  true;
     
        for (let j = 0; j < arr.length; j++) {
           
                if(arr[i]===arr[j] && i!==j){
                    singleFound= false;
                    break;
                }
        }
        
        if(singleFound === true){
            return arr[i]
        }
    }

   }




console.log(noPair(arr))
