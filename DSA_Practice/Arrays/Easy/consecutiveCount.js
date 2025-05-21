let arr = [ 1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];


function consecutiveCount(arr){

    let count = 1;
    let maxcount = 1;
    for (let i = 0; i < arr.length; i++) {

        if(arr[i]===1){

            if(arr[i]===arr[i+1]){
                
                count++;
                
            }
            else{
                count = 1;
            }
            
            if(maxcount<count){
                maxcount=count;
            }
            
        }
    }
   
    console.log(maxcount);
}   

consecutiveCount(arr);