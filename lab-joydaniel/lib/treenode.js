'use strict';

module.exports = class TreeNode { // Big O: O(1) constructor.
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
};