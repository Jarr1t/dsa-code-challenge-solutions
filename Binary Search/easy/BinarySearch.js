function search(nums, target) {
    let leftP = 0
    let rightP = nums.length - 1

    while(leftP <= rightP){
        let mid = Math.floor((leftP + rightP) / 2)

        if(nums[mid] === target) return mid

        if(nums[mid] < target){
            leftP = mid + 1
        } else {
            rightP = mid - 1
        }
    }

    return -1
}