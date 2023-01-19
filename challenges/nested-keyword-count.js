/*

Given an arbitrarily nested array of strings, and a target keyword strong,
return the number of times a keyword appears in a nested array of arrays.

keywordCount(['bye', 'hi', ['cool', 'hi']], 'hi') -> 2 because 'hi' appears twice
keywordCount(['x', 'y', ['x', 'x'], 'a'], 'x') -> 3
keywordCount(['blah', 'key', ['inside', ['really inside']]], 'lol') -> 0

*/

const keywordCount = (array, keyword) => {

    //create a count variable
    let count = 0; 
    //flatten the array so we can iterate over easily
    const newArr = array.flat(Infinity);
    //iterate over the new array 
    for (let el of newArr){
        //check if the current string is the keyword,
        if (el === keyword){
            //if true -> increment the count
            count += 1;
        }
    }
  //return the count
  return count;
};

/*

Extension:

Given a nested array of arrays, return an array of keywords that appear the most
often. Return multiple results within the array if there's a tie. Return the
multiple in lexiographical (alphabetic) order.

keywordMode([['cars', 'bat'], 'apple', 'bat', 'cars']) -> ['bat', 'cars']
keywordMode([['ace', 'cool'], ['hi'], 'cool']) -> ['cool']

*/

const keywordMode = array => {

    //flatten the nested array 
    const newArr = array.flat(Infinity);
    //create a counter object to store value and count
    const counter = {};
    //create a result array
    const result = [];
    //iterate over the new array and create or increment variable in object
    for (let el of newArr){
        counter[el] ? counter[el] += 1: counter[el] = 1; 
    }
    //create a variable to store max count 
    const maxCount = Math.max(...Object.values(counter))
    //iterate over object and check to see if the count matches the maxcount 
    for (let key in counter){
        //if true, push into the result array
        if (counter[key] === maxCount){
            result.push(key)
        }
    }
        //return the result array
     return result; 
};

module.exports = {keywordCount, keywordMode};
