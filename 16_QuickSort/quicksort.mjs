function quickSort(arr, left, right) {
    if(left <= right) {
        let pivot = divide(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
}

function divide(arr, left, right) {
    let pivot = arr[left];
    let leftStartIndex = left + 1;
    let rightStartIndex = right;
    while(leftStartIndex <= rightStartIndex) {
        
        //1. leftStart에서 시작하여 피벗보다 "큰" 값을 만날 때 까지 이동
        while(leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
            leftStartIndex++;
        }

        //2. rightStart에서 시작하여 피벗보다 "작은" 값을 만날 때 까지 이동
        while(rightStartIndex >= (left + 1) && pivot <= arr[rightStartIndex]) {
            rightStartIndex--
        }
        
        //3. 둘 다 멈추었으니 이 블럭을 통과하여 값 교환
        if(leftStartIndex <= rightStartIndex) {
            swap(arr, leftStartIndex, rightStartIndex);
        }
    }

    //피벗이 left로 해두었으니 rightStartIndex 자리에 피벗을 넣게 되는 것임.
    swap(arr, left, rightStartIndex);
    return rightStartIndex;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

let arr = [6, 5, 1, 2, 7, 4, 3, 9, 8]
console.log("==== 정렬 전 ====");
console.log(arr);

quickSort(arr, 0, arr.length - 1);

console.log("==== 정렬 후 ====");
console.log(arr);