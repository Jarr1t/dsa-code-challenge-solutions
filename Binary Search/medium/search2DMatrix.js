function searchMatrix(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length

    let leftP = 0
    let rightP = rows * cols - 1 

    while(leftP <= rightP){
        let mid = Math.floor((leftP + rightP) / 2)
        let row = Math.floor(mid / cols)
        let col = mid % cols
        let value = matrix[row][col]
        console.log()

        if(value === target) return true

        if(value < target){
            leftP = mid + 1
        } else {
            rightP = mid - 1
        }
    }

    return false
}