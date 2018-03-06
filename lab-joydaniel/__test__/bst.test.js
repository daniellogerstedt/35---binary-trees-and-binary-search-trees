'use strict';

let BST = require ('../lib/bst');
require('jest');

let unbalTree = new BST();

unbalTree.insert(4);
unbalTree.insert(5);
unbalTree.insert(1);
unbalTree.insert(2);
unbalTree.insert(3);

// unbalTree looks like this:
//     4
//    / \
//   1   5
//    \   
//     2   
//      \ 
//       3

let balTree = new BST();
balTree.insert(4);
balTree.insert(2);
balTree.insert(6);
balTree.insert(1);
balTree.insert(11);

// balTree looks like this:
//     4
//    / \
//   2   6
//  /     \
// 1      11

describe('BST', () => {
  describe('isBalanced', () => {
    it('should return false for unbalanced trees', () => {
      expect(unbalTree.isBalanced()).toBe(false);
    });
    
    it('should return true for balanced trees', () => {
      expect(balTree.isBalanced()).toBe(true);
    });
  });

  describe('remove', () => {
    it('should remove the correct node', () => {
      balTree.remove(11);
      expect(balTree.root.right.right).toBe(null);
    });
  });
});