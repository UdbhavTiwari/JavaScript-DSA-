let arr= [2,42,5,62,6,8,21,9];


for(let i = 0 ; i<arr.length;i++){

    let j = i+1

    while(j>0 && arr[j]<arr[j-1]){

        [arr[j],arr[j-1]]= [arr[j-1],arr[j]]
            j--
    }

}

console.log(arr)