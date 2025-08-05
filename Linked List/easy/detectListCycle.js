/*
Linked List Cycle Detection - https://neetcode.io/problems/linked-list-cycle-detection?list=neetcode150
Difficulty: Easy
Given a linked list, return true if there is a cycle.
Otherwise, return false

Example:
Input: head = [1,2,3,4,1] (cycle pointing back to 1)
Output: true

Input: head = [1,2,3]
Output: false

Input: head = [1]
Output: false

Time: O(n)
    Traverses each node once using two pointers
Space: O(1)
    Uses only two pointers, no extra memory
*/

function hasCycle(head) {
    //Use fast and slow pointers to look for cycles
    let fast = head;
    let slow = head;

    //If fast reaches null then there no cycle
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;

        //If fast and slow meet then there is a cycle
        if (fast === slow) return true;
    }

    return false;
}