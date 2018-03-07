# Lab 35 Documentation:

## Binary Tree

  A Binary tree is a tree consisting of nodes with a maximum of 2 children. They are organized as left or right. This file contains traversal methods for binary trees:

  * Pre Order (Root, Left, Right):

      Pre Order goes over each node in the tree invoking the callback on the current node before recursively calling the Pre Order function on the left then right node.

  * In Order (Left, Root, Right)

      In Order goes over each node in the tree recursively calling the In Order function until it reaches a tree where the left tree does not exist then it invokes the callback on the current node before traversing right.

  * Post Order (Left, Right, Root)

      Post Order first builds the callstack by recursively calling itself on each nodes left and right children before finally invoking the callback on the current node.

## Binary Search Tree

  A binary search tree is a lot like a binary tree except all values are numeric and are ordered from left most to right most as least to greatest. These values will never be right of a value they are less than and instead will travel right until they find a number they are greater than before being placed on the left child of that node. The opposite for nodes with values less than the node they are currently looking at. This file contains methods to insert a node, verify whether a BST is balanced, and remove a node.

  * Insert:

      This method traverses down the tree by verifying whether the current value to be added is greater than or less than the current nodes value. When it finds a location where the current node is null it adds the node to that location on the previous node.

  * Find: 

      This method locates a specific node by value through traversing the tree based on greater than or less than concept.

  * Remove:

      This method traverses down the tree till it finds the node to be removed, it then locates the smallest value on the subtrees associated with that node and removes that node placing the value at the node to be removed.

  * Is Balanced: 

      This method traverses down the tree verifying the maximum height of all sub trees, if the tree differs in height by greater than one it returns false, otherwise it returns true.

## Tree Node

  A Tree node takes a value and contains a null left and right until it has children assigned.

  * Constructor:

      Takes a value and assigns it to the new Tree Node.