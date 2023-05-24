
// function buckets (arr){

//     let current = new Set();
//     let max = 0; 
//     for (let i = 0; i < arr.length; i++){
//         const [first, second] = arr[i].split(' ');
//         console.log(first, second)
//         if (first === "goto"){
//             max = Math.max(current.size, max)
//             current = new Set();
//         }

//         if (first === "create"){
//             current.add(second)
//             max = current.size
//         }
//     }
// return max; 

// }



// let input1 = ["goto bucketA", "create bbb", "create aaa", "goto bucketB", "create ccc", "goto bucketC",  "create aaa", "create bbb", "create ccc”"
// ]

// console.log(buckets(input1))





/* 
You are given an array of strigns paths containing parths to some files or directories. All file paths
start with "/". 
Note: File paths may contain special characters ".." to represent parent directory specifiers. For example
"/a/b/../" points to the same directory as "/a". It is guaranteed that all given file paths are valid. 

Your task is to find the longest common suffix path without file masks or special characters (e.g. "..",etc) If
there isn't any common suffix path return an empty string as ""

*/


function filePath(paths){
    let longest = ""
    for (let i = 0; i < paths.length; i++){
        let first = paths[i].split('/').pop()
        
        let difference = false; 
        for(let j = 1; j < paths.length; j++){   
        }
        if (difference) break;
    }
}


let paths1 = [
    "/a/folder1/../folder1/a/leaf.txt", 
    "/b/folder2/../folder1/a/leaf.txt", 
    "/a/folder3/folder1/folder1/../a/leaf.txt"]

console.log(filePath(paths1))


/*
 Given a 2d matrix and a rhombus radius, find the maxSum of a rhombus's frame
*/

function maxSumRhombus(grid, radius){

    let maxSum = 0; 
    for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid[0].length; col++){
            if (isValidRhomubs(grid,radius, row, col)){
                let result = sumRhombusFrame(grid,radius, row, col)
                maxSum = Math.max(result, maxSum)
            }
        }
    }
return maxSum; 

}
//need to check up right, down right, 
function isValidRhomubs(matrix, radius, i, j){
    let down = i + radius; 
    let up = i - radius
    let left = j - radius;
    let right = j + radius; 

    if (up < 0 || down < 0 || up >= matrix.length || down >= matrix.length) return false;
    if (left < 0 || right < 0 || left >= matrix[0].length || right >= matrix[0].length) return false;

return true; 

}
function sumRhombusFrame(matrix, radius, i, j){
    let sum = 0; 
    let down = i + radius; 
    let up = i - radius
    let left = j - radius;
    let right = j + radius; 
    sum += matrix[down][left]
    sum += matrix[up][left]
    sum += matrix[down][right]
    sum += matrix[up][right]
return sum; 
}

//console.log(maxSumRhombus([[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]], 1))

/*
 Given an array of commands, return an array of the frequency each command occurred
 E.g.
[ ls, mv, cp, cp, cp !1, !3, !6 ]
If the command is '!n', you move to that command item in the list
E.g.
!1 => ls
!3 => cp
!6 => !1 => ls

Return result in specific order given like [ n of ls, n of cp, n of mv]
Result = [2, 4, 1] in this case
*/

function countStuff (commands){

    let numLS = 0;
    let numCP = 0;
    let numMV = 0;
    const result = [];

    for (let i = 0; i < commands.length; i++){
        if (commands[i] === "!1" || commands[i] === "ls" || commands[i] === "!6") numLS++
        if (commands[i] === "!3" || commands[i] === "cp") numCP++
        if (commands[i] === "mv") numMV++
    }
result.push(numLS)
result.push(numCP)
result.push(numMV)
return result;
}

// console.log(countStuff(['ls', 'mv', 'cp', 'cp', 'cp', '!1', '!3', '!6 ']))





/*
 Given a starting value and an array values to add/subtract, return the string for the range of numbers it falls into
 initial = 100 arr = [100, -20, 502, -295]
*/

function solution(pattern, source) {
    const set = {
        'a': true,
        'e': true,
        'i': true,
        'o': true,
        'u': true, 
        'y': true  
    }
    let count = 0; 
    for (let i = 0; i < source.length - pattern.length + 1; i++){
        let candidate = source.slice(i, i + pattern.length)
        for (let j = 0; j < candidate.length; j++){
            if (pattern[j] === "0"){
                console.log(!set[candidate[j]])
                if (!set[candidate[j]]) break;
            }
            
            if (pattern[j] === "1"){
                if (set[candidate[j]]) break; 
                
            } 
            if (j === pattern.length - 1) count++; 
        }
        
    }
    return count; 
} 

// console.log(solution("100","codesignal"))

/* Bus Schedule*/

function busSchedule (arr, timeGiven){

    let timeNow = parseInt(timeGiven.substring(0,2)) * 60 + parseInt(timeGiven.substring(3))
    console.log(timeGiven.substring(0,2) * 60)
    let res = 0; 

    arr.sort((a,b) => a - b)

    let time = [];
    for (let s of arr){
        let val = parseInt(s.substring(0,2)) * 60 + parseInt(s.substring(3))
        time.push(val)
    }

    for (let i = time.length - 1; i > 0; i--){
        if (timeNow > time[i]){
            return timeNow - time[i]
        }
    }
}

let schedule = [`05:00`, `07:30`, `10:30`]
let giventime = '08:00'
//console.log(busSchedule(schedule,giventime))


/*
Q4. Imagine a number line of infinite length.
 
Given a list of commands which includes:
[1, pos]
[2, pos, length]

- element[0] is 1: create an obstacle at position element[1] on the number line
- element[0] is 2: see if a block can be placed at position element[1] on the number line, where the block is length element[2]. 
Blocks are not actually placed.
 
Return as a string, a combination of 0 or 1 for each “2” command where 1 is if the block can be placed without obstruction and 0 otherwise.

Example:
Input: 
]
*/

function testing (arr) {

    //if element[0] is 1 create an obstacle at position element[1]
    let array = [];
    //create output string
    let str = ""

    for (let nums of arr){
        const [first, second] = nums;
        if (first === 1){
            array[second] = 'obstacle'
        } 
    }

    for (let nums of arr){
        let flag = false; 
        const [first, second, length] = nums;
        if (first === 2){
            for (let i = second; i < second + length; i++){
                if (array[i]){
                    flag = true;
                    continue;  
                }
            }
            if (flag) str += 0
            if (!flag) str += 1;  
        }
        
    }
    return str; 
}


/*
You are given an array of non-negative integers numbers. You are allowed to choose any number from this array and swap any two digits in it. If after the swap operation the number contains leading zeros, they can be omitted and not considered (eg: 010 will be considered just 10).

Your task is to check whether it is possible to apply the swap operation at most once, so that the elements of the resulting array are strictly increasing.

Example

For numbers = [1, 5, 10, 20], the output should be solution(numbers) = true.

The initial array is already strictly increasing, so no actions are required.

For numbers = [1, 3, 900, 10], the output should be solution(numbers) = true.

By choosing numbers[2] = 900 and swapping its first and third digits, the resulting number 009 is considered to be just 9. So the updated array will look like [1, 3, 9, 10], which is strictly increasing.

For numbers = [13, 31, 30], the output should be solution(numbers) = false.

The initial array elements are not increasing.
By swapping the digits of numbers[0] = 13, the array becomes [31, 31, 30] which is not strictly increasing;
By swapping the digits of numbers[1] = 31, the array becomes [13, 13, 30] which is not strictly increasing;
By swapping the digits of numbers[2] = 30, the array becomes [13, 31, 3] which is not strictly increasing;
So, it's not possible to obtain a strictly increasing array, and the answer is false.
*/


function solution2(numbers) {

    let result = isIncreasing(numbers)
    if (result === true) return true; 
    else {
        const [middle, i] = result; 
       
        let candidates = swapAndOmit(middle);
        if (!candidates) return false; 
       
        for (let str of candidates){
            const number = Number(str);
            const copy = numbers; 
            copy[i] = number;
            let value = isIncreasing(copy)
    
            if (value === true){
                console.log()
                return true; 
            }
        }       
    }
return false; 
}

function isIncreasing(array){
    for (let i = 0; i < array.length - 1; i++){
        console.log(array[i + 1], array[i])
        if (array[i + 1] <= array[i]) return [array[i], i]
    }
    return true; 
}

function swapAndOmit(inputNumber) {
    const inputStr = String(inputNumber);
    const result = [];
    //iterate over input str
    for (let i = 0; i < inputStr.length; i++){
    //store the first character in a variable
        let first = inputStr[i];
    //make a copy of the number without the first digit
        let copy = inputStr.slice(1)
    //append the digit to the end and join and push this into candidates
        let candidate = copy.concat(first)
        result.push(candidate)
    }
    return result;
  }



  function arrTarget (target){
    const result = [];
    for (let i = 0; i < target.length; i++){
        if (i === 0 || i === target.length - 1){
            result.push(target[i])
        }
        let bigger = Math.max(target[i - 1], target[i + 1])
        if (target[i] > bigger){
            result.push(target[i])
        } 
    }
    return result
  }



//   console.log(arrTarget([1, 2, 1]));

/*return 1st team and 2nd team in array [1st, 2nd], index corresponds to team
  index 0,1,2 = team 0, team 1, team 2
  each win = 3 points
  each draw = 1 point
  each loss = 0 points
*/

function team (wins, draws, scored, conceded) {

    const result = [];
    const result2 = {};
    const differences = [];
    const differences2 = {};

    for (let i = 0; i < wins.length; i++){
        let scores = wins[i] * 3
        scores += draws[i] * 1;
        result[i] = scores;
        result2[result[i]] = i; 
        let diff = scored[i] - conceded[i];
        differences[i] = diff;
        differences2[differences[i]] = i; 
    }
   
    result.sort((a,b) => b-a);
    if (result[0] !== result[1]) return [result2[result[0]], result2[result[1]]]
    else {
        differences.sort((a,b) => b - a);
        return [differences2[differences[0]], differences[1]]
    }

}

// let wins = [2, 1, 0];
// let draws = [1, 5, 6];
// let scored = [20, 15, 10];
// let conceded = [20, 10, 15];

let wins = [3, 1, 2, 2]; 
let draws = [1, 5, 4, 4];
let scored = [30, 10, 20, 40];
let conceded = [32, 13, 18, 37];

// console.log(team(wins, draws, scored, conceded))

