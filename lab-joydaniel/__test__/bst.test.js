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

    it('should return null for empty trees', () => {
      let emptyTree = new BST();
      expect(emptyTree.isBalanced()).toBe(null);
    });
  });

  describe('remove', () => {
    it('should remove the correct node', () => {
      balTree.remove(11);
      expect(balTree.root.right.right).toBe(null);

      unbalTree.remove(4);
      expect(unbalTree.root.value).toBe(5);

      balTree.insert(11);
      balTree.insert(5);
      balTree.remove(6);
      expect(balTree.root.right.value).toBe(11);
      expect(balTree.root.right.left.value).toBe(5);

    });

    it('should return null for empty trees', () => {
      let emptyTree = new BST();
      expect(emptyTree.remove(1)).toBe(null);
    });

    it('should return null if no value input', () => {
      expect(balTree.remove()).toBe(null);
    });

    it('should return null value does not exist', () => {
      expect(balTree.remove(12341)).toBe(null);
    });
  });
});