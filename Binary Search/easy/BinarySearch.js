/*
Binary Search - https://neetcode.io/problems/binary-search?list=neetcode150
Difficulty: Easy
Given a sorted array of integers and a target value, return the index of the target if found.
Otherwise, return -1.

Example:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4

Time: O(log n)
    The search area gets halved every itteration
Space: O(1)
    Only creating pointers, no extra storage
*/

function search(nums, target) {
    //Initialize two pointers to track current search bounds
    let leftP = 0
    let rightP = nums.length - 1

    //Keep pushing pointers together until the they cross eachother
    while(leftP <= rightP){

        //Finding the middle of the search area
        let mid = Math.floor((leftP + rightP) / 2)

        //If the number in the middle of both pointers equals target return that index
        if(nums[mid] === target) return mid

        //Checks to see if the number in the middle is less than or greater than target
        if(nums[mid] < target){
            //If the number is less than target, move leftP; the target would be to the right of nums[mid]
            leftP = mid + 1
        } else {
            //If the number is greater than target, move rightP; the target would be to the left of nums[mid]
            rightP = mid - 1
        }
    }
    //Return -1 if target is not found
    return -1
}