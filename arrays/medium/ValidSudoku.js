// Valid Sudoku
// https://neetcode.io/problems/valid-sudoku?list=neetcode150
// Difficulty: medium
// Time: O(1), Space: O(1)

isValidSudoku(board) {
    // use set to find if any dupes in rows

    for(let row of board){
        let set = new Set()

        for(let i = 0; i < row.length; i++){
            if(row[i] !== '.'){
                if(set.has(row[i])){
                    return false
                } else {
                    set.add(row[i])
                }
            } 
        }
    }

    // use set to find if any dupes in columns

    for(let col in board){
        let set = new Set()

        for(let j = 0; j < 9; j++){
            if(board[j][col] !== '.'){
                if(set.has(board[j][col])){
                    return false
                } else {
                    set.add(board[j][col])
                }
            }
        }
    }

    // use set to find dupes in 3x3
  
    for(let rowStart = 0; rowStart < 9; rowStart += 3){
        for(let colStart = 0; colStart < 9; colStart += 3){
            const set = new Set()

            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    if(board[rowStart + i][colStart + j] !== '.'){
                        if(set.has(board[rowStart + i][colStart + j])){
                            return false
                        } else {
                            set.add(board[rowStart + i][colStart + j])
                        }
                    }
                }
            }
        }
    }

    return true
}
