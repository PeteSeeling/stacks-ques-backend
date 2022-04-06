
// creating tree node class
class BinaryTreeNode {
  constructor(value) {
//   adding constructor values
    this.value = value;
    this.left = null;
    this.right = null;
  }
  
  // add node function
  add(node, value) {
    // Implement me!
    // if value is less than node vale and node left is not null add node.left and value
    if(value < node.value){
      if(node.left != null){
  
        this.add(node.left, value);
      // else if the value is greater than node.value and if node.right is not null add node right and value 
      }
  
    }else if(value > node.value) {
      if(node.right != null){
        this.add(node.right, value);
  
      }
    }
  }
}
  
const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');
  
// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
  
