// Group Anagrams
// https://neetcode.io/problems/anagram-groups?list=neetcode150
// Difficulty: medium
// Time: O(n), Space: O(n)

function groupAnagrams(strs) {

    const sortedStrs = {};

    for(let i = 0; i < strs.length; i++){
        let sorted = strs[i].split('').sort();

        if(sortedStrs[sorted]){
            sortedStrs[sorted].push(strs[i]);
        } else{
            sortedStrs[sorted] = [strs[i]];
        }
    };

    return Object.values(sortedStrs);
}
