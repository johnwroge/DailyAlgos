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
 var exist1 = function(board, word) {

    //iterate over the board
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board[0].length; col++){

            //invoke helper function with the board, the word, row index, col index, and 0 
            

        }
    }
};

const dfs1 = (board, seen, row, col) => {

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

//soln2 leetcode

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (existHelper(board, word, i, j, 0)) return true;
        }
    }

    return false;
};

// if the word[k] existing in board, keep searching up, down, left, right 
var existHelper = function(board, word, i, j, k) {
    if (k === word.length) return true;
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1) return false;
    if (board[i][j] === word[k]) {
        var tmp = board[i][j];
        board[i][j] = '#';
        if (existHelper(board, word, i + 1, j, k + 1) ||
            existHelper(board, word, i - 1, j, k + 1) ||
            existHelper(board, word, i, j + 1, k + 1) ||
            existHelper(board, word, i, j - 1, k + 1)) {
              return true;
        }
        board[i][j] = tmp;
    }
};