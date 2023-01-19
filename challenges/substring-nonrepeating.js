/*

Given a string, find the length of the longest substring without repeating characters.
Just return the length of the substring, not the substring itself.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The longest substring is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The longest substring is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The longest substring is "wke", with the length of 3.
Note that the longest substring must actually be a substring, as "pwke" is a
subsequence and not a substring.

Example 4:
Input: ""
Output: 0
Explanation: an empty string has length 0

Hint: think about the largest valid "window" of a substring without repeating
characters. How do we keep track of this "window"?

*/
//inputs: string
//outputs: number

//sliding window approach
//edge case: empty string, return 0
const substringNonrepeating = string => {
    //edge case: empty string -> return 0
    if (!string.length) return 0;
    let currentArray = [];
    let length = 0; 
    for (let i = 0; i < string.length; i++){   
        const indexOf = currentArray.indexOf(string[i]);
        if (indexOf !== -1){
            currentArray.splice(0, indexOf + 1);
        }
        currentArray.push(string[i]);
        length = Math.max(length, currentArray.length);
    }
    return length;
};

const substringNonrepeating2 = string => {
   
    const cache = new Set();
    let longest = 0;
    let left = 0;
    let right = 0;

    while (right < string.length){

        if (cache.has(string[right])){
            cache.delete(string[left]);
            left++
        } else {
            cache.add(string[right]);
            longest = Math.max(longest, cache.size);
            right++
        }
    }
return longest; 
};



module.exports = {substringNonrepeating};
