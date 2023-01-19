/* 

Given a two dimensional array, write a function called 'matrixTranspose' that returns 
a transposed version of that array.

Example: 
const twoDimArray = [['fred', 'barney'], 
                     [30, 40], 
                     [true, false]]
                      
console.table(matrixTranspose(twoDimArray)); // -> [['fred', 30, true], 
                                                    ['barney', 40, false]]

*/
// [j][i]
// [0][0] [1][0] [2][0]
// [0][1] [1][1] [2][1]

const matrixTranspose = matrix => {

    if (!matrix.length) return matrix; 
    const result = Array.from({length: matrix[0].length}, () => 
        new Array(matrix.length).fill(0))
    for (let r = 0; r < matrix.length; r++){
        for (let c = 0; c < matrix[0].length; c++){
            result[c][r] = matrix[r][c];
        }
    }
   return result; 
 }

 const matrixTranspose2 = matrix => {
    if (!matrix.length) return matrix;
    if (matrix[0] === undefined) return undefined;
    return matrix[0].map((column,i) => matrix.map(row => row[i]))
 }
      
 
     




//console.log(matrixTranspose([['fred', 'barney'], [30, 40], [true, false]]));

/*

Extension:
Given an nxn matrix, write a function called 'matrixRotate' that rotates the matrix 90 degrees clockwise.
If given an mxn matrix, return undefined.

For example:  
const matrix = [  [1, 2, 3],
                  [4, 5, 6],
                  [7, 8, 9]  ]

console.table(matrixRotate(matrix)) // ->  [  [7, 4, 1],
                                              [8, 5, 2],
                                              [9, 6, 3]  ]

BONUS: Rotate the matrix in place. In other words, the space complexity of the solution should be O(1).

*/

const matrixRotate = matrix => {
    const results = [];
    if (!matrix.length) return matrix;
    if (matrix[0] === undefined) return undefined;
    if (matrix[0].length !== matrix.length) return undefined; 
   
    let newArr; 
    for (let j = 0; j < matrix.length; j++){
        newArr = [];
        for (let i = matrix.length - 1; i >= 0; i--){
            newArr.push(matrix[i][j]);
        }
        results.push(newArr)
    }
return results; 
  
};

const matrixRotate2 = matrix => {
    if (!matrix.length) return matrix;
    if (matrix[0] === undefined) return undefined;
    if (matrix[0].length !== matrix.length) return undefined; 
    const rotated = matrix.reverse()
    return rotated[0].map((_, i) => rotated.map((m) => m[i]));
}

// console.log(matrixRotate([  [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]  ]))



module.exports = { matrixTranspose, matrixRotate };
