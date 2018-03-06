'use strict';

const BinaryTree = require('../lib/binarytree');
const TreeNode = require('../lib/treenode');
require('jest');

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

let preOrder = '1245637', postOrder = '4652731', inOrder = '4265137';

describe('BinaryTree traversals', () => {
  let str = '';
  let callback = nd => str += nd.value;

  it('should test pre order traversal', () => {
    str = '';
    tree.preOrderTraversal(tree.root, callback);
    expect(str).toBe(preOrder);
  });

  it('should test in order traversal', () => {
    str = '';
    tree.inOrderTraversal(tree.root, callback);
    expect(str).toBe(inOrder);
  });

  it('should test post order traversal', () => {
    str = '';
    tree.postOrderTraversal(tree.root, callback);
    expect(str).toBe(postOrder);
  });
});