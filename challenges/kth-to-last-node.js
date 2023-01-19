/**
 * Write a function that takes two parameters (an integer, and the head of a
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 * 
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}



function kthToLastNode(k, head){

  //edge case: if k is less than or equal to 0,or no k or no head
    //return undefined
    if (k <= 0 || !k || !head) return undefined; 
  
    //initialize a current to head
    let current = head; 
    //intialize a previous to current
    let previous = current; 
  

  //traverse through the LL 
    //test while k > 0
      //reassign the current to be current.next
      //decrement k
      while (k > 0){
        k--;
        if (current.next === null) break;
        current = current.next;
      }
      //edge case: if k does not reach 0 it's an invalid input
      if (k !==0 ) return undefined; 
   //traverse throguh the LL
    //test while current not null
      //reassign current to be current.next
      //reassign  previous to be previous.next
      while (current){
        current = current.next;
        previous = previous.next;
      }
//return previous.value
return previous.value; 
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;





//Do not delete! 
module.exports = {Node, kthToLastNode};