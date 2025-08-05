/*
Reverse Linked List - https://neetcode.io/problems/reverse-a-linked-list?list=neetcode150
Difficulty: Easy
Given a linked list, reverse the list and return the new beginning 

Example:
Input: head = [0,1,2,3]
Output: [3,2,1,0]

Input: head = []
Output: []

Input: head = [1]
Output: [1]

Time: O(n)
    Reversing the list in place
Space: O(1)
    Uses only pointers, no extra memory needed
*/

function reverseList(head) {

    if(!head) return null

    let prev = null;
    let curr = head;

    while(curr){
        let holder = curr.next;
        curr.next = prev
        prev = curr
        curr = holder
    }

    return prev

}