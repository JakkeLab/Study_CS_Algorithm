import { Queue } from "./Queue.mjs";

let queue = new Queue();

console.log("===== enqueue() 세 번 호출 =====");
queue.enqueue(1);
console.log(queue.front().data);
queue.enqueue(2);
console.log(queue.front().data);
queue.enqueue(3);
console.log(queue.front().data);

console.log("===== dequeue() 네 번 호출 =====");
console.log(queue.dequeue().data);
console.log(queue.dequeue().data);
console.log(queue.dequeue().data);
console.log(queue.dequeue()?.data);

console.log(`isEmpty: ${queue.isEmpty()}`);

//231128_이중연결리스트를 통한 큐의 구현