// Complete the 'minimize' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY point
//  *  2. INTEGER k
//  */
// inputs: array (point) and integer (k)
// outputs: return minium absolute (non negative) difference between max and min
 
 //difference between maximum and minimum value
//can increment or decrement current element by k 

//brute force: find all possible combinations of elements 
 
function minimize(point, k) {
    let possible = []; 
    const dfs = (arr,val, k, i = 0, current) => {
        if (arr[i] === undefined){
            console.log()
            current = Math.max(...arr) - Math.min(...arr);
            console.log(current) 
            possible.push(current)
            return;
        };
        arr[i] = val; 
        dfs(arr, arr[i] + k, k, i + 1, current)
        dfs(arr,arr[i] - k, k, i + 1, current)
    }
    
    dfs(point, k)
    
    return Math.min(...possible);
}


/*
 * Complete the 'solve' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. STRING_ARRAY s
 */

function solve(m, s) {
    // fill this function

}



console.log(minimize([2,3,4,1], 2))