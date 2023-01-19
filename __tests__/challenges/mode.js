/*

Given an array of numbers (integers), return the mode, that is, the number that
appears most often. If there are multiple modes, use the max of the modes.

Assume that at least one number is present in the array.

e.g.
mode([3, 2, 4, 3]) -> 3
mode([7, 5, 8, 8, 2, 5]) -> 8

*/

const mode = array => {

    //create frequency counter object
    const frequency = new Map();
    //create a max count initialized at negative infinity
    let maxCount = 0;
    let max = -Infinity; 
    //iterate through the array and initialize or increment the element count
    for (let num of array){
        frequency[num] ? frequency[num] += 1 : frequency[num] = 1;
    }


    for (let num in frequency){
        
        if (frequency[num] >= maxCount && Number(num) > max){
             maxCount = frequency[num];
             max = Number(num);
             
        }
       
    }
    return Number(max); 
};


console.log(mode([12,5,32,4]))// -> 3
 //-> 8

/*

Extension:

Given an arbitrarily nested array of numbers (integers), return the mode, that
is, the number that appears most often. If there are multiple modes, use the max
of the modes.

Assume that at least one number is present in the nested array structure,
although some of the nested arrays may be empty.

e.g.
mode([[3], [2, [4]], 3]) -> 3
mode([7, [[5, [8], 8], 2, 5]]) -> 8
mode([4, []]) -> 4 

*/

const modeNested = array => {

    let newArray = array.flat(2);

     //create frequency counter object
     const frequency = new Map();
     //create a max count initialized at negative infinity
     let maxCount = 0;
     let max = -Infinity; 
     //iterate through the array and initialize or increment the element count
     for (let num of array){
         frequency[num] ? frequency[num] += 1 : frequency[num] = 1;
     }
 
 
     for (let num in frequency){
         
         if (frequency[num] >= maxCount && Number(num) > max){
              maxCount = frequency[num];
              max = Number(num);
              
         }
        
     }
     return Number(max); 
};




module.exports = {mode, modeNested};
