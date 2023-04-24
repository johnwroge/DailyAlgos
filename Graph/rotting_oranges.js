/*
994. Rotting Oranges
Medium
10.2K
341
Companies
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally
 adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.
If this is impossible, return -1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    if (!grid) return 0; 
    let count = 0; 
    let col = grid[0].length;
    let row = grid.length; 
    let cache = grid.map(col => col.map(row => false))
   
    for (let i = 0; i < col; i++){
        for (let j = 0; j < row.length; j++){
            if (dfs(grid, i, j)){
                count++ 
            }

        }
    }

    dfs(grid, col, row);
    return count; 
};

const dfs = (graph, x, y) => {
    if (!graph) return;
    if (x < 0 || y < 0 || x >= col.length || y >= row.length) return; 
    else if (cache[x][y]){
      cache[x][y] = true;

    }
}

orangesRotting([[2,1,1],[1,1,0],[0,1,1]])