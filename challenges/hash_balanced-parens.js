/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' const wow = { yo: thisIsAwesome() }'); // true
 * balancedParens(' const newton = () => { telescopes.areSicc(); '); // false
 *
 *
 */

const balancedParens = input => {

    let hash = {"[" : "]", "{" : "}", "(" : ")"}
    let stack = []; 
    let newStr = "";
    for (let char of input){
        if (char === "[" || char === "]" || char === "(" || char === ")" || char === "{" || char === "}"){
            newStr += char; 
        }
    }
   
    for (let char of newStr){
    
        if (hash[char]){
            stack.push(hash[char])
        }
        else if (char === stack[stack.length - 1] && stack.length !== 0){
            stack.pop();
        }
        else {
            return false;
        }
    }
return stack.length === 0; 
    }
console.log(balancedParens(' const wow = { yo: thisIsAwesome() }'))

module.exports = { balancedParens} ;
