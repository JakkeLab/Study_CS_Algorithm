function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let insertingData = arr[i];
        let j;
        for(j = i - 1; j >= 0; j--) {
            if(arr[j] > insertingData) {
                //한칸씩 밀어주는거
                arr[j+1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = insertingData;
    }
}

let arr = [5, 3, 1, 2, 6, 4];

console.log("=== 정렬 전 ===");
console.log(arr);
InsertionSort(arr);
console.log("=== 정렬 후 ===");
console.log(arr);