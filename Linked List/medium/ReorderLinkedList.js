/*
Reorder Linked List - https://neetcode.io/problems/reorder-linked-list?list=neetcode150
Difficulty: Medium
Reorder the nodes of a linked list so that they follow the pattern -> [first, last, second, second last, ...]

Examples:
Input: head = [2,4,6,8]
Output: [2,8,4,6]

Input: head = [7]
Output: [7]

Input: head = [1,2]
Output: [1,2]

Input: head = [2,5,7]
Output: [2,7,5]

Time: O(n)
    Iterating through the list to find the middle, reverse the second half, and merge both halves
Space: O(1)
    All operations are done in-place using pointers, no extra space is used
*/

function reorderList(head) {
    if (!head || !head.next) return;

    //Use fast & slow pointers to find the middle of the list
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }

    //Reverse the second half of the list
    let curr = slow;
    let prev = null;
    let temp = curr;

    while(curr){
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    //Merge the two halves (first and reversed second)
    let list1 = head;
    let list2 = prev;

    while(list2){
        let temp1 = list1.next;
        let temp2 = list2.next;

        list1.next = list2;
        list2.next = temp1;

        list1 = temp1;
        list2 = temp2;
    }

    //Check to make sure there are no cycles in the list
    if(list1) list1.next = null
}