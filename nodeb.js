
// adding class
class LinkedListNode{

  // creating constructor with values needed
  constructor(value){
    this.value = value;
    this.next = null;

  }
  // add Value function
  addValue(value){
    //    adding value to linkedlistnode
    this.add(new LinkedListNode(value));
  }
  //   add node function
  add(node){

    // if there is no next this node is the next one 
    if(!this.next){
      this.next = node;
    }else{
      // if yes, the next node is added to the current one 
      this.next.add(node);
    }
  }

  // get list function
  getList(){
    if(!this.next) return this.value;

    return `${this.value} ${this.next.getList()}`;
  }
}
   

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'


