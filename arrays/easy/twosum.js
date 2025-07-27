// https://neetcode.io/problems/two-integer-sum?list=neetcode150
// Difficulty: Easy
// Time: O(n), Space: O(n)

function twoSum(nums, target) {
  const differences = new Map(); // a Map to hold key: value pairs of differences and the indexes of the corresponding numbers (differences: i)

  for (let i = 0; i < nums.length; i++) { // iteate through the nums array
    let diff = target - nums[i]; // find the difference between the given target number and the current number in the array

    if (differences.has(nums[i])) { // checking if the differences object contains the number I'm currently looking at in the array
      return [differences.get(nums[i]), i]; // if true, return the index of the difference within the differences Map and the current index
    } else {
      differences.set(diff, i); // if false, add the calculated difference and the current index to the Map
    }
  }
}
