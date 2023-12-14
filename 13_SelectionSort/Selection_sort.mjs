function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        let minValueIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if(arr[k] < arr[minValueIndex]) {
                minValueIndex = k;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minValueIndex];
        arr[minValueIndex] = temp;
    }
}


let arr = [6, 1, 3, 2]

console.log("===정렬 전===");
console.log(arr);

selectionSort(arr);

console.log("===정렬 후===");
console.log(arr);