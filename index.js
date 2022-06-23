
class Stack{
  constructor(value){
    if (isNaN(value)){
      value = 'gator';
    }
    this.value = value;
    this.container = [];
  }
  
  push(value){
    this.container.push(value);
  }
  pop(){
    return this.container.length ? this.container.pop() : null;
  }
  peek(){
    // return this.container.at(-1);
  }
}
const stack = new Stack();
stack.push('dog');
stack.push('cat');
stack.push('moose');
stack.push('gazzelle');

class Queue {
  constructor() {
    this.items = [];
  }
  // enqueue
  enqueue(el) {
    this.items.push(el);
  }
  // dequeue
  dequeue() {
    this.items.shift();
    return this.items;
  }
    
  hasNext() {
    if (this.items) {
      return true;
    }
  }
  
}
const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
queue.enqueue('llama');

