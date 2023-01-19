function Node(value) {
  this.value = value;
  this.next = null;
}

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

const reverseLinkedList = head => {
  //check if the head is a falsy value, return null
  if (!head) return null;
  //initialize node to be the current head;
  let node = head;
  //declare previous and tmp
  let previous;
  let tmp;
//loop while node is truthy
  while(node){
    //reassign tmp to be node.next
    tmp = node.next;
    //reassign node.next to be previous
    node.next = previous;
    //reassign previous to be node
    previous = node;
    //reassign node to be tmp
    node = tmp;
  }
//return the previous value
return previous; 
};

module.exports = { Node, reverseLinkedList }
