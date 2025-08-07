/*
Zigzag Conversion - https://leetcode.com/problems/zigzag-conversion/description/
Difficulty: Medium
Given a string and a number, return the string modified into a zigzag pattern with a number of rows
Otherwise, return false

Example:
Input: s = "JARRIT", numRows = 4
Output: "JATRIR"
J
A  T
R I
R

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

Input: s = "A", numRows = 1
Output: "A"

Time: O(n)
    Traverses the string once
Space: O(1)
    Creates an array that will only ever be as big as numRows
*/

var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    //Zag functionality
    let counter = 0;
    let diag = false

    //Array to hold all letters in a particular row
    const newRows = Array.from({ length: numRows}, () => '')

    for(let i = 0; i < s.length; i++){
        let currRow = newRows[counter] || '';
        currRow += s[i];
        newRows[counter] = currRow

        if (counter === 0 || counter === numRows - 1){
            diag = !diag
        }

        counter += diag ? 1 : -1
    }

    //Returns joined version of final created string
    return newRows.join('')
};