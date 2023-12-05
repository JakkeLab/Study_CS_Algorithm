function sumArray(arr) {
    if(arr.length == 1) return arr[0];
    return sumArray(arr.slice(0, -1)) + arr[arr.length - 1];
}

let arr = [1, 2, 3, 4, 5];
let sum = sumArray(arr);

//재귀 과정 그림으로 그려보기
// 1만 있을 때 : 1 반환, 1~2 있으면 2반환 후 1을 포함한 재귀함수 호출 하므로 또 1이 반환되어 2 + 1이 실행됨.

console.log(sum);