/* 
You are given an array of strigns paths containing parths to some files or directories. All file paths
start with "/". 
Note: File paths may contain special characters ".." to represent parent directory specifiers. For example
"/a/b/../" points to the same directory as "/a". It is guaranteed that all given file paths are valid. 

Your task is to find the longest common suffix path without file masks or special characters (e.g. "..",etc) If
there isn't any common suffix path return an empty string as ""

*/


/*
 Given a 2d matrix and a rhombus radius, find the maxSum of a rhombus's frame
*/



/*
 Given an array of commands, return an array of the frequency each command occurred
 E.g.
[ ls, mv, cp, cp, cp !1, !3, !6 ]
If the command is '!n', you move to that command item in the list
E.g.
!1 => ls
!3 => cp
!6 => !1 => ls
*/



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

// let schedule = [`05:00`, `07:30`, `10:30`]
// let giventime = '08:00'
// console.log(busSchedule(schedule,giventime))


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

let test = [[1, 5], [2, 1, 2], [2, 4, 3]]
console.log(testing(test))