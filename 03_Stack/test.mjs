import { Stack } from "./Stack.mjs";

let stack = new Stack();

console.log("==== 첫 번째 출력 ====");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log("==== 두 번째 출력 ====")
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data);
stack.pop();
console.log(stack.peek().data);
console.log(`isEmpty : ${stack.isEmpty()}`);
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty : ${stack.isEmpty()}`);
console.log(stack.pop());

//231128_Stack의 연결리스트를 이용한 구현
//내가 백준 28278번 풀때 구현한 방식은 Next 링크(포인터)를 이용한 것으로 볼 수 있음.
//Index를 이용하여 접근하면 배열을 이용한 방식으로 볼 수 있으니 이것도 연습해보기