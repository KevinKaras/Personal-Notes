


let board = [ 
    [7, 8, 0, 4, 0, 0, 1, 2, 0],       // x0 | y0 , y , y , y , y , y , y , y , y8
    [6, 0, 0, 0, 7, 5, 0, 0, 9],       // x
    [0, 0, 0, 6, 0, 1, 0, 7, 8],       // x
    [0, 0, 7, 0, 4, 0, 2, 6, 0],       // x
    [0, 0, 1, 0, 5, 0, 9, 3, 0],       // x
    [9, 0, 4, 0, 6, 0, 0, 0, 5],       // x
    [0, 7, 0, 3, 0, 0, 0, 1, 2],       // x                              
    [1, 2, 0, 0, 0, 7, 4, 0, 0],       // x                            
    [0, 4, 9, 2, 0, 6, 0, 0, 7],       // x8
]





function findNextEmpty(board){
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            // console.log(board[i][j])
            if(board[i][j] === 0){
                return {'x': i, 'y': j}
            }
        }
    }
    return false
}




function valid(x, y, board){
    // CHECK ROW
    let boardVal = board[x][y]
    
    for(let i = 0; i < board[x].length; i++){
        if(board[x][i] === boardVal && (i != y) && board[x][i] != 0){
            return false
        }
    }


    // CHECK COLUMN
    
    for(let i = 0; i < board.length; i++){
        if(board[i][y] === boardVal && (i != x) && board[i][y] != 0){
            return false
        }
    }


    // CHECK CLUSTER
    
    xGridInterval = Math.floor(x/3)
    yGridInterval = Math.floor(y/3)
    
    
    for(let i = xGridInterval * 3; i < ((xGridInterval * 3) + 3); i++){
        for(let j = yGridInterval * 3; j < ((yGridInterval * 3) + 3); j++){
            if(board[i][j] === boardVal && (i != x && j != y) && board[i][j] != 0){
                return false
            }
        }
        
    }


    return true;
}

function printBoard(board){
    for(let i = 0; i < board.length; i++){
        if(i % 3 === 0 && i != 0){
            console.log("-----------------------")
        }
        let row = ""
        for(let j = 0; j < board[i].length; j++){
            if(j % 3 === 0 && j != 0){
                row += " | "
            }
            if(j === 8){
                row += board[i][j]
            } else {
                row += board[i][j] + " "
            }
        }
        console.log(row)
    }
}
let backtrack = 0
function solve(x, y, board){
    

    for(let i = 1; i <= 9; i++){
        // console.log("ENTERING ITERATION: ", board)
        let emptyPos = findNextEmpty(board)   // {x: 0, y: 2}
        if(emptyPos === false){
            return true
        }
        board[emptyPos.x][emptyPos.y] = i
        // console.log("AFTER SET: ", board)
        if(valid(emptyPos.x, emptyPos.y, board)){
            nextPos = findNextEmpty(board)
            if(solve(nextPos.x, nextPos.y, board)){
                return true
            }
        }
        backtrack += 1
        board[emptyPos.x][emptyPos.y] = 0
    }
}

printBoard(board)

solve(0, 0, board)
console.log("\n")
printBoard(board)
console.log("Back tracked " + backtrack + " many times")



