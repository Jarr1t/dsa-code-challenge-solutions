// Top K Frequent Elements
// https://neetcode.io/problems/top-k-elements-in-list?list=neetcode150
// Difficulty: Medium
// Time: O(n * k), Space: O(m + k)

function topKFrequent(nums, k) {

    // use map, keys won't be strings
    // have an array for the most frequent
    //iterate through nums counting occurrences

    const occs = new Map();
    let mostFreq = 0;
    const retArr = [];

    for(let i = 0; i < nums.length; i++){
        occs.set(nums[i], (occs.get(nums[i]) || 0) + 1)
        mostFreq = Math.max(mostFreq, occs.get(nums[i]))
    }

    while(retArr.length !== k){
        for(let [key, value] of occs.entries()){
            if(value === mostFreq){
                retArr.push(key)
            }
        }
        mostFreq--
    }

    return retArr
}
