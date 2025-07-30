// Products of Array Except Self
// https://neetcode.io/problems/products-of-array-discluding-self?list=neetcode150
// Difficulty: medium
// Time: O(n), Space: O(n)

function productExceptSelf(nums) {

    const products = new Array(nums.length).fill(1)

    for(let i = 1; i < nums.length; i++){ // multiplying the previous numbers in both arrays to get the current product 
        products[i] = nums[i - 1] * products[i - 1]
    }

    let runningProduct = 1
    for(let i = nums.length - 1; i >= 0; i--){
        products[i] *= runningProduct
        runningProduct *= nums[i]
    }

    return products
}
