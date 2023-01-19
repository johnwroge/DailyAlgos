/*

Reverse and return an array in-place. Do not create a new array in memory.
Instead, modify the array as given. Do not use the array reverse method built in
to the array prototype while solving the problem.

*/

const reverseArray = array => {
//create a left variable
let left;
//create a right variable
let right; 
    //iterate over the array from beginning to middle 
//let k = array.length - 1;
    for (let i = 0, k = array.length - 1; i < Math.floor(array.length/2); i++, k--){
        //assign the left variable to be the first element
        left = array[i];
        //assign the right variable to be the last element
        right = array[k]
        //assign the 0th index to be the right variable
        array[i] = right;
        //assign the last index to be the left variable
        array[k] = left; 
    }
//return the finished array
    return array; 
};

/*

Extension: (recommended to solve reverseArray first)

Given a string as a sentence "bob likes dogs alot" return the word reversal
"alot dogs likes bob". Do not use the array reverse method built in to the array
prototype.

The input string will always be a series of words separated by spaces between
them, with each word containing only lowercase letters and no punctuation. The
input string will always have at least one word

*/

const reverseSentence = sentence => {

    //split the string into an array of words
    sentence = sentence.split(' ');
    //declare a new empty array
    const newArr = [];
    //iterate through the the word aray
    for (let i = sentence.length - 1; i >= 0; i--){
        //push the last word in the array of words into the new array
        newArr.push(sentence[i]);
    }
    //return the joined array of new words with a space
    return newArr.join(' ');
};

console.log(reverseSentence("bob likes dogs alot"))
module.exports = {reverseArray, reverseSentence};
