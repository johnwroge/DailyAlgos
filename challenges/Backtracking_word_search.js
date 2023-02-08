/*
79. Word Search
Medium
12.7K
513
Companies
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells
 are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.

*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {

    //create a grid to keep track if current letter has been visited
    const seen = board.map(row => row.map(col => false))
    //iterate over the board
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board[0].length; col++){

            if (board[row][col] === word[0]){
                dfs(board, seen, row, col);
            }

        }
    }
};

const dfs = (board, seen, row, col) => {

    //base case: if board[row][col] is undefined 


}


//neetcode

/**
 * https://leetcode.com/problems/word-search/
 * Time O(N * 3^L) | Space O(L)
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++){
            if (dfs(board, row, col, word, 0)) return true;
        }
    }

    return false;
}

const dfs = (board, row, col, word, index) => {
    if (index === word.length) return true;
    if (isOutOfBound(board, row, col)) return false;
    if (board[row][col] !== word[index]) return false
        
    board[row][col] = '*';
    
    const hasWord = Object
        .values(directions(row, col))
        .filter(([r, c]) => dfs(board, r, c, word, index + 1))
        .length
    
    board[row][col] = word[index];
    return hasWord;
}

const isOutOfBound = (board, row, col) => {
    const isRowOutOfBound = row < 0 || board.length - 1 < row
    const isColOutOfBound = col < 0 || board[0].length - 1 < col 
    return isRowOutOfBound || isColOutOfBound
}

const directions = (row, col) => ({
    up: [row - 1, col],
    down: [row + 1, col],
    left: [row, col - 1,],
    right: [row, col + 1]
})