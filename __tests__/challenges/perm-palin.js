/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 * @see: Permutations: https://stattrek.com/statistics/dictionary.aspx?definition=permutation
 * @see: Palindromes: https://examples.yourdictionary.com/palindrome-examples.html
 *
 * In terms of time complexity, see if you can solve this in O(n) / linear time.
 * 
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 * Hint: Think about the length of the string and how that relates to the frequencies of the characters
 */

//helper function


const permPalin = str => {
  
    //edge case: if str is not type string return false
    if(typeof str  !== 'string') return false;
    //edge case: if the str is empty, return true
    if (str === "") return true;
    //creating a cache
    const cache = {};
    //check if the string length is even
    const isEven = str.length % 2 === 0;
    //iterate over the characters in the string
    for (let char of str){
        cache[char] = cache[char] === 1 ? 0 : 1;
    }

    
    
    //check if the str length is even -> if true
    let count = 0; 
    if (!isEven){
        for (let key in cache){
            if (cache[key] === 1) count += 1;
        }
        return count > 1 ? false: true; 
    }
return false; 

};
console.log(permPalin('cbac'))


/* 
 * Extension: Solve in constant space complexity.
 */
const permPalinAdvanced = str => {

};

module.exports = { permPalin };