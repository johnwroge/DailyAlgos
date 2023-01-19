/* 
Determine whether a target substring can be found within a string! 
No regex allowed! No string.prototype.includes or string.prototype.indexOf!

Your solution should have O(n * m) time-complexity where:
n is equal to the given string length
m is equal to the target substring length

I.e. in 'xztzcatbfbbq' find 'cat' 

Input: 'xztzcatbfbbq', 'cat'
Output: true

Input: 'finding a needle in a haystack', 'lein'
Output: false
*/

const needleInHaystack = (string, substring) => {
    if (substring.length > string.length) return false;
    //create a counter variable
    let counter = substring.length;
    //create a new string
    const newStr = ""; 
    //create second index 
    //iterate over characters in string
    for (let i = 0; i < string.length; i++){
        let j = 0;
        //if character at i in string matches character in j in string, loop while counter > 0
        if (string[i] === substring[j]){
            let newStr = "";
            console.log(substring[j])
            while (j < substring.length){ 
                    newStr += string[i]
                    console.log(newStr)
                    i += 1;
                    j++
                }
                console.log(newStr)
            if (newStr === substring) return true; 
            } 
        }
        return false; 
    }
   
console.log(needleInHaystack('w o w', ' w'))


/*
Extension: Now imagine the target substring and string both might have underscores '_'.
Treat '_'s as wildcards, or blank pieces in Scrabble - i.e., they can be any letter.

Input: '_ello_orld', 'helloworl_'
Output: true

Input: 'montana', '__o__'
Output: false
*/

const needleInHaystackWithWildcards = (string, substring) => {

    for (let i = 0; i < string.length; i++){

        const slice = string.slice(i, substring.length + i);

        for (let j = 0; j < slice.length; j++){
            if (!substring[j] === '_' || slice[j] === '_' || substring[j] === slice[j]) break;
            if (j === substring.length - 1) return true; 
        }
    }

};

module.exports = { needleInHaystack, needleInHaystackWithWildcards };