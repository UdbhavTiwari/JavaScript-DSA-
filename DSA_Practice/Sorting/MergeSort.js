let arr = [1,2,7,5,3,9,8];
let high= arr.length-1;
let low = 0;
function mergeSort(arr,low, high){
    if(low>=high) return;

let mid = Math.floor((low+high)/2)

mergeSort(arr,low,mid);
mergeSort(arr,mid+1,high);
merge(arr,low,mid,high);


}

function merge(arr,low,mid,high){
    let tempArr = [];
    let left = low;
    let right = mid+1;
    while(left<=mid && right<=high){

        if(arr[left]<arr[right]){
            tempArr.push(arr[left])
            left++
        }
        else{
            tempArr.push(arr[right]);
            right++
        }
    }

        while(left<=mid){
            tempArr.push(arr[left])
            left++
        }
        while(right<=high){
            tempArr.push(arr[right]);
            right++
        }

        for(let i = low; i <=high;i++){

            arr[i] = tempArr[i-low];    // i-low because temp arr starts from 0th index but we have to assign values in arr from low to high not from 0 so to 
                                        // read the temp[0] we do i - low
        }


}

mergeSort(arr,low,high)

console.log(arr);