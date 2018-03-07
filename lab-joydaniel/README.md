# Lab 35 Documentation:

## Installation:
  
  To use:
  
  1 Fork the repository using the fork option at the top right of github.
  2 Clone the forked repository to directory.
  3 Import into file where needed.
  
  To run tests:
  
  1 Follow use instructions.
  2 In Terminal run NPM Install inside the directory.
  3 Use NPM Run Test in directory from terminal.
  
## Testing:

  Each function is tested to verify if given a valid input it returns the desired input, they are also tested for invalid and undefined inputs. 

## Binary Tree

  A Binary tree is a tree consisting of nodes with a maximum of 2 children. They are organized as left or right. Binary tree creation example, if running node from the lab-joydaniel directory:

```
const BinaryTree = require('./lib/binarytree');
const TreeNode = require('./lib/treenode');

let tree = new BinaryTree();
let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);

tree.root = one;
one.left = two;
one.right = three;
two.left = four;
two.right = five;
five.left = six;
three.right = seven;

// Tree looks like this:
//     1
//    / \
//   2   3
//  / \   \
// 4   5   7
//    /
//   6
```
  
  This file contains traversal methods for binary trees:

  * Pre Order (Root, Left, Right):

      Pre Order goes over each node in the tree invoking the callback on the current node before recursively calling the Pre Order function on the left then right node. Example: ```tree.preOrderTraversal(tree.root, nd => console.log(nd.value));```

  * In Order (Left, Root, Right)

      In Order goes over each node in the tree recursively calling the In Order function until it reaches a tree where the left tree does not exist then it invokes the callback on the current node before traversing right. Example: ```tree.inOrderTraversal(tree.root, nd => console.log(nd.value));```

  * Post Order (Left, Right, Root)

      Post Order first builds the callstack by recursively calling itself on each nodes left and right children before finally invoking the callback on the current node. Example: ```tree.postOrderTraversal(tree.root, nd => console.log(nd.value));```

## Binary Search Tree

  A binary search tree is a lot like a binary tree except all values are numeric and are ordered from left most to right most as least to greatest. These values will never be right of a value they are less than and instead will travel right until they find a number they are greater than before being placed on the left child of that node. The opposite for nodes with values less than the node they are currently looking at. This file contains methods to insert a node, verify whether a BST is balanced, and remove a node.

  Example of creating a new BST: Require in the bst.js file and use ```let tree = new BST()```.

  * Insert:

      This method traverses down the tree by verifying whether the current value to be added is greater than or less than the current nodes value. When it finds a location where the current node is null it adds the node to that location on the previous node. Example: ```tree.insert(5)```

  * Find: 

      This method locates a specific node by value through traversing the tree based on greater than or less than concept. Example: ```tree.find(5)```

  * Remove:

      This method traverses down the tree till it finds the node to be removed, it then locates the smallest value on the subtrees associated with that node and removes that node placing the value at the node to be removed. Example: ```tree.remove(5)```

  * Is Balanced: 

      This method traverses down the tree verifying the maximum height of all sub trees, if the tree differs in height by greater than one it returns false, otherwise it returns true. Example: ```tree.isBalanced()```

## Tree Node

  A Tree node takes a value and contains a null left and right until it has children assigned.

  * Constructor:

      Takes a value and assigns it to the new Tree Node. Example: ```let node = new TreeNode();```