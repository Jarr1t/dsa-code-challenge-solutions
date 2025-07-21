// 001. Two Sum
// https://leetcode.com/problems/two-sum/
// Difficulty: Easy
// Time: O(n), Space: O(n)

function twoSum(nums, target) {
  const differences = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (differences.has(nums[i])) {
      return [differences.get(nums[i]), i];
    } else {
      differences.set(diff, i);
    }
  }
}
