/*
Search a 2D Matrix - https://neetcode.io/problems/search-2d-matrix?list=neetcode150
Difficulty: Medium
Given a 2D matrix where each row is sorted and the first integer of each row is greater than the last integer of the previous row,
determine if the target value exists in the matrix. Return true if it does, otherwise return false.

Example:
Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
Output: true

Time: O(log(m * n))
    The matrix is treated like a flattened sorted array, so binary search halves the search area each iteration
Space: O(1)
    Only creating pointers and index variables; no extra storage used
*/

function searchMatrix(matrix, target) {
    // Getting matrix dimensions
    let rows = matrix.length
    let cols = matrix[0].length

    // Setting search bounds for flattened 
    let leftP = 0
    let rightP = rows * cols - 1 

    // Binary search through the virtual 1D version of the 2D matrix
    while(leftP <= rightP){
        let mid = Math.floor((leftP + rightP) / 2)

        // Convert mid index into actual 2D row/col coordinates
        let row = Math.floor(mid / cols)
        let col = mid % cols
        let value = matrix[row][col]

        // If target is found, return true
        if(value === target) return true

        if(value < target){
            // If target is larger, ignore left half
            leftP = mid + 1
        } else {
            // If target is smaller, ignore right half
            rightP = mid - 1
        }
    }

    // If the loop ends, the target is not in the matrix
    return false
}
