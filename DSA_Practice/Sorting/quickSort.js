let arr = [2, 3, 5, 7, 3, 1, 8, 9, 6, 5];
let low = 0;
let high = arr.length - 1;
function quickSort(arr, low, high) {
    if(low<high){

        let pivotIndex = quickPivot(arr, low, high);
        
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function quickPivot(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high) {
      i++;
    }

    while (arr[j] > pivot && j >= low) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
    [arr[low],arr[j]] = [arr[j],arr[low]];
return j;
}

quickSort(arr,low,high);
console.log(arr)