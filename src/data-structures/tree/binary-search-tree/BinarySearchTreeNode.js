import BinaryTreeNode from '../BinaryTreeNode';
import Comparator from '../../../utils/comparator/Comparator';

export default class BinarySearchTreeNode extends BinaryTreeNode {
  /**
   * @param {*} [value] - node value.
   * @param {function} [compareFunction] - comparator function for node values.
   */
  constructor(value = null, compareFunction = undefined) {
    super(value);

    // This comparator is used to compare node values with each other.
    this.compareFunction = compareFunction;
    this.nodeValueComparator = new Comparator(compareFunction);
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {

  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  find(value) {
   
  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  contains(value) {

  }

  /**
   * @param {*} value
   * @return {boolean}
   */
  remove(value) {
    

 
  }

  /**
   * @return {BinarySearchTreeNode}
   */
  findMin() {
    
  }
}
