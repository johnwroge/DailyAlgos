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

/*

1. understand the problem
    given a



2. algorithm design

3. implementation


*/



var orangesRotting = function(grid) {
    //create a bag class to store items from the grid; 
    const queue = [];
    //create a count variable
    let count = 0; 
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            //if current value is 2 (rotten) push into queue
            if (grid[i][j] === 2){
                queue.push([i,j,0]);
                //these are rotten at time = 0
            } else if (grid[i][j] === 1){
                count += 1;
            }
            //if current value is 1, increment count and reassign to 2
        }
    }
    //while the bag is not empty, process all the neighbors
    let max = 0;
    
    while (queue.length){
        let current = queue.shift();
        let x = current[0];
        let y = current[1];
        let time = current[2];
        max = Math.max(max, time)
        
        if (x < grid.length - 1 && grid[x + 1][y] === 1){
             queue.push([x + 1, y, time + 1]);
             grid[x + 1][y] = 2;
             --count; 
        }
        if (x > 0 && grid[x - 1][y] === 1){
            queue.push([x - 1, y, time + 1])
            grid[x - 1][y] = 2;
             --count; 
        }
        if (grid[x][y + 1] === 1){
            queue.push([x, y + 1, time + 1])
            grid[x][y + 1] = 2;
             --count; 
        }
        if (grid[x][y - 1] === 1) {
            queue.push([x, y - 1, time + 1])
            grid[x][y - 1] = 2;
             --count; 
        }

    }
 //check whether we reached all the fresh oranges (if count === 0)
 if (count === 0){
     return max
 } else {
     return -1
 }

}
// orangesRotting([[2,1,1],[1,1,0],[0,1,1]])