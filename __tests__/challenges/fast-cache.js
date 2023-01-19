/*
 define a function "fastCache" that takes one argument, a function, and returns a function. 
 When fastCache is invoked it creates an object that tracks calls to the returned function, where each input to the returned function is associated with its output. 
 Every subsequent call to that returned function with the same argument will return the output directly from the object, instead of invoking the original function again.
*/

const fastCache = func => {
    //create object
const cache = {};
//return anonymous function
    return function (arg){
        //check if there is a key of arg in cache
        if (cache[arg]){
            //if true, return value at that key;
            return cache[arg];
        } else {
        //otherwise, create a key of the arg and assign it to the eval. result of invoking cb passing in arg
        cache[arg] = func(arg);
        //return value at the newly created key
        return cache[arg];
        }
    }
};

/*
 Extension: Rewrite fastCache so it can handle array or object input, and any number of arguments.
 HINT: you might need to use the spread operator...
*/

const fastCacheAdvanced = func => {
       //create object
const cache = {};
//return anonymous function
    return function (...arg){
        //check if there is a key of arg in cache
        if (cache[arg]){
            //if true, return value at that key;
            return cache[arg];
        } else {
        //otherwise, create a key of the arg and assign it to the eval. result of invoking cb passing in arg
        cache[arg] = func(...arg);
        //return value at the newly created key
        return cache[arg];
        }
    }
};

module.exports = {fastCache, fastCacheAdvanced};