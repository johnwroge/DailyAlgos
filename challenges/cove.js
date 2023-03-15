/*
Given an array of nullean booleans and string conjuction, return a
 boolean or null which represents if the conditions are met to 
 validate particular data. 

[true, true] "AND" -> true
[false, false] "AND" -> false
[true, false] "AND" -> false
[true, null] "AND" -> null
[false, null] "AND" -> false

[false, true] "OR" -> true
[false, false] "OR" -> false
[false, null] "OR" -> null
[true, null] "OR" -> true
*/



const validData = (array, condition) => {
    //check if the initial condition "AND"
  
    if (condition === "AND"){
        //create a nullflag initalized to false;
        let andFlag = false; 
        //iterate over the array
        for (let el of array){
            //check if any of the value are false -> return false
            if (el === false) return false; 
            //check if any of the values are null -> change boolean to null
            if (el === null) return null;
        }
        //outside of loop check if boolean flag is true, 
        return true; 
            //if true, return null otherwise return true
    }
    //check if the initial value is "OR"
    if (condition === "OR"){
        //create a nullflag initialized to false
        let orFlag = false; 
        //iterate over the array
        for (el of array){
            //check for a truthy value -> return true
            if (el) return true;
            //check for a null value -> update nullflag to true
            if (el === null) orFlag = true;
        }
        //outside the loop check if the flag is true
        if (orFlag){
            return null;
        } else {
            return false; 
        }
            //if true, return null, otherwise return false
    }
}

/*[true, true] "AND" -> true
[false, false] "AND" -> false
[true, false] "AND" -> false
[true, null] "AND" -> null
[false, null] "AND" -> false

[false, true] "OR" -> true
[false, false] "OR" -> false
[false, null] "OR" -> null
[true, null] "OR" -> true
*/
// console.log(validData([null, false], "OR"))
// console.log(validData([false, false], "OR"))
// console.log(validData([null, false], "OR"))
// console.log(validData([null, true], "OR"))

// console.log(validData([true, true], "AND"))
// console.log(validData([false, false], "AND"))
// console.log(validData([true, false], "AND"))
// console.log(validData([true, null], "AND"))
// console.log(validData([false, null], "AND"))