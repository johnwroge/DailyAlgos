


var solve = function(board) {

    //iterate over the board 
    for (let i = 0; i < board.length; i++){   
        for (let j = 0; j < board[0].length; j++){
        //check if the current position is a "O"
            if (board[i][j] === "O" && (i === 0 ||j === 0 || i === board.length - 1 || j === board[0].length - 1)){
            //check if the helper function returns true
                dfs(board, i, j) 
                //if true, update the current position to a "X"
            }
        }
    }
console.log('board',board)
    for (let i = 0; i < board.length; i++){   
        for (let j = 0; j < board[0].length; j++){
            if (board[i][j] === "visited"){
                board[i][j] = "O"
            } else {
                board[i][j] = "X"
            }
        }
    }
    //return the board
    return board;
};

var dfs = (board, row, col) => {

 if (row < 0 || col < 0 
    || row >= board.length 
    || col >= board[0].length 
    || board[row][col] === "visited"
    || board[row][col] === "X"
    ) return; 
  
    
    //test if the current character is an "O"
        board[row][col] = "visited"
        //recurisvely call dfs in all 4 directions
        dfs(board, row + 1, col)
        dfs(board, row - 1, col)
        dfs(board, row, col + 1)
        dfs(board, row, col - 1)
    
return; 
}

console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))