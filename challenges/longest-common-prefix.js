/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

//inputs: three strings
//outputs: a string
const longestCommonPrefix = (strs) => {
     //create a result string
    let result = "";
    if (!strs.length) return result; 
    if (strs.length === 1) return strs[0];
    //iterate over the array of strings
    for (let i = 0; i < strs[0].length; i++){
        //create a current char variable
        let current = strs[0][i];
        let count = 0;
        //iterate over the arrays
        for (let j = 1; j < strs.length; j++){
        //check if the first character in each string is the current character
            if (strs[j][i] === current){
                //increment count variable 
                count += 1;    
            }
            if (count === strs.length - 1){
                result += current; 
            }
        }
    }       
    //return the final string
    return result;
};


// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
module.exports = { longestCommonPrefix };
