// Valid Anagram
// https://neetcode.io/problems/is-anagram?list=neetcode150
// Difficulty: Easy
// Time: O(n log n), Space: O(n)

function isAnagram(s, t) {

//sort the strings
//compare if they equal eachother
//return result
  return s.split('').sort().join() === t.split('').sort().join()

}
