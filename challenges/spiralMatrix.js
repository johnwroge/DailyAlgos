
/*
Challenge 1
Declare a function spiralMatrix that takes in a 2-dimensional array of 
numbers representing an m * n matrix, and returns a 1-dimensional array 
containing all the elements in spiral order starting from the top-left corner 
(matrix[0][0]). For example:

[[1, 2, 3]
[4, 5, 6]
[7, 8, 9]]

Should return: [1, 2, 3, 6, 9, 8, 7, 4, 5]
*/

//this doesnt pass all test cases
function spiral(matrix) {
    const arr = [];
      
    while (matrix.length) {
      arr.push(
        ...matrix.shift(),
        ...matrix.map(a => a.pop()),
        ...(matrix.pop() || []).reverse(),
        ...matrix.map(a => a.shift()).reverse()
      );
    }
    return arr;
  }


  var spiralOrder = function(matrix) {
    const res = []
    while(matrix.length){
      const first = matrix.shift()
      res.push(...first)
      for(const m of matrix){
        let val = m.pop()
        if(val)
          res.push(val)
          m.reverse()   
      }
      matrix.reverse()
    }
    return res
  };