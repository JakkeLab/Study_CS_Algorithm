function BubbleSort(arr){
    for(let i = 0; i < arr.length - 1; i++) {
        for(let k = 0; k < (arr.length - i -1); k++) {
            if(arr[k] > arr[k + 1]) {
                let temp = arr[k+1];
                arr[k+1] = arr[k];
                arr[k] = temp; 
            }
        }
    }
}

let arr = [ 4, 5, 2, 1, 3];
BubbleSort(arr);
console.log(arr);