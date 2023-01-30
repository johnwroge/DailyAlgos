/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    //initialize empty array to store values
    let arr = []
    //creating a dummy node
    let res = new ListNode()
    //copy dummy node in another variable 
    let copy = res;
    //iterate over the linked list
    while(head){
        //push the current value into the array
        arr.push(head.val)
        //reassign the head to be head.next
        head = head.next;
    }
    //[1,2,3,4,5], n = 2
    //iterate over the array
    for(let i =0; i<arr.length;i++){
        //check if the array length minus i equals n, if so continue
        if(arr.length-i == n) continue;
        //reassign copy .next to be a new list node with the current element 
        copy.next = new ListNode(arr[i])
        //reassign copy to be copy.next
        copy = copy.next;
    }
    //return res.next
    return res.next;
};