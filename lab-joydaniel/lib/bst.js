'use strict';

let TreeNode = require('./treenode'); 

module.exports = class BST {
  constructor(root = null) {
    this.root = root;
  }

  insert(val, node = this.root) {
    if (node === null) this.root = new TreeNode(val); // Big O: O(1)
    else if (val < node.value) {
      if (!node.left) node.left = new TreeNode(val);
      else this.insert(val, node.left); // Big O: O(n)
    }
    else if (val > node.value) {
      if (!node.right) node.right = new TreeNode(val);
      else this.insert(val, node.right); // Big O: O(n)
    }
  }

  find(val, node = this.root) {
    if (!node) return null; // Big O: O(1)
    if (val === node.value) return node; // Big O: O(n)
    else if (val < node.value) return this.find(val, node.left); // Big O: O(n)
    else return this.find(val, node.right); // Big O: O(n)
  }

  remove(val, node = this.root, parent = null) {
    if (!val || !node) return null; // Big O: O(1)
    if (!node) return null; // Big O: O(1)

    let prnt = null;
    const _deleteMin = (nd, prev) => {
      if (!nd.left) {
        let min = nd.value;
        if (prnt) prnt.left = null;
        else prev.right = null;
        return min; // Big O: O(n)
      }
      else {
        prnt = nd;
        return _deleteMin(nd.left); // Big O: O(n)
      }
    };
    
    if (val < node.value) {
      parent = node;
      return this.remove(val, node.left, parent);
    }
    else if (val > node.value) {
      parent = node;
      return this.remove(val, node.right, parent);
    }
    else if (val === node.value) {
      if (!node.right && !node.left) {
        if (!parent) this.root = null;
        else if (val < parent.value) parent.left = null;
        else if (val > parent.value) parent.right = null;
      } 
      else if (node.right && !node.left) {
        if (!parent) this.root = node.right;
        else parent.right = node.right;
      }
      else if (!node.right && node.left) {
        if (!parent) this.root = node.left;
        else parent.left = node.left;
      }
      else if (node.right && node.left) node.value = _deleteMin(node.right, node); // Big O: O(n) (calls _deleteMin to find and remove smallest value to be placed at location)
    }
  }

  isBalanced() {
    if (!this.root) return null; // Big O: O(1)
    const _maxHeight = node => {
      if (!node) return null; // Big O: O(1)
      return 1 + Math.max(_maxHeight(node.left), _maxHeight(node.right)); // Big O: O(n)
    };
    const _minHeight = node => {
      if (!node) return null;
      return 1 + Math.min(_minHeight(node.left), _minHeight(node.right)); // Big O: O(n)
    };
    return _maxHeight(this.root) - _minHeight(this.root) <= 1; // Big O: O(n)
  }
};
