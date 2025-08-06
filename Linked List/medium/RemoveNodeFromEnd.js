/*
Remove Node From End of Linked List - https://neetcode.io/problems/remove-node-from-end-of-linked-list?list=neetcode150
Difficulty: Medium
Remove the nth node from the end of a linked list and return the head of the modified list

Example:
Input: head = [1,2,3,4], n = 2
Output: [1,2,4]

Input: head = [5], n = 1
Output: []

Input: head = [1,2], n = 2
Output: [2]

Time: O(n)
    Traverses each node once using two pointers
Space: O(1)
    Uses only two pointers, no extra memory
*/

function removeNthFromEnd(head, n) {

    // Dummy node to simplify edge cases (like removing the head)
    let dummy = new ListNode(0);
    dummy.next = head;

    let firstP = dummy;
    let secondP = dummy;

    //Move first pointer n + 1 steps ahead
    for(let i = 0; i <= n; i ++){
        firstP = firstP.next;
    }

    //Move both pointers until firstP reaches the end
    while(firstP){
        firstP = firstP.next;
        secondP = secondP.next;
    }
    //Remove pthe nth node from the end
    secondP.next = secondP.next.next;

    return dummy.next;
}