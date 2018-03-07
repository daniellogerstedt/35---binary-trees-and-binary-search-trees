'use strict';

let TreeNode = require('./treenode'); // eslint-disable-line

module.exports = class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrderTraversal(node, callback) { // Big O: O(n)
    callback(node);
    if (node.left) this.preOrderTraversal(node.left, callback);
    if (node.right) this.preOrderTraversal(node.right, callback);
  }

  inOrderTraversal(node, callback) { // Big O: O(n)
    if (node.left) this.inOrderTraversal(node.left, callback);
    callback(node);
    if (node.right) this.inOrderTraversal(node.right, callback);
  }

  postOrderTraversal(node, callback) { // Big O: O(n)
    if (node.left) this.postOrderTraversal(node.left, callback);
    if (node.right) this.postOrderTraversal(node.right, callback);
    callback(node);
  }
};
