import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class LinkedList {
  /**
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;

    this.compare = new Comparator(comparatorFunction);
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  prepend(value) {

  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {

  }

  /**
   * @param {*} value
   * @return {LinkedListNode}
   */
  delete(value) {
  
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {LinkedListNode}
   */
  find({ value = undefined, callback = undefined }) {

  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
   
  }

  /**
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {LinkedList}
   */
  fromArray(values) {
   
  }

  /**
   * @return {LinkedListNode[]}
   */
  toArray() {
    
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {

  }

  /**
   * Reverse a linked list.
   * @returns {LinkedList}
   */
  reverse() {

  }
}
