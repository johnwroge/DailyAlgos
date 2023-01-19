/* 

Write a function that logs to the console an nxn representation of a staircase for any 
given nonnegative height, n. If the passed-in height is negative, console log an empty string.
The staircase must climb up from left to right. Each level of stairs logs a string of
asterisks and/or leading spaces. Note that the last stair should only consist of 
asterisks without any leading spaces.
 
For example:     
drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

const drawStairs = (n)=> {
     const star = "*";
     const space = " ";
  	let	numStars = 1; 
     for (let i = n; i > 0; i--){
          console.log(`${space.repeat(i - 1)}` + `${star.repeat(numStars)}`)
          numStars += 1;
     }
     
}
    
    
/* 

Extension:
Write a function that logs to the console an nxn overlapping '+' and 'X' for a given 
number n where n must be an odd positive number. Note that each row of the star must
be 'n' characters long. Be sure to include any leading/trailing spaces per row.

Examples:
drawStar(1) ->
+

drawStar(3) ->
\|/
-+-
/|\

drawStar(5) ->
\ | /
 \|/ 
--+--
 /|\ 
/ | \

*/

const drawStar = n => {

     if (n % 2 !== 1) throw Error("n must be odd");
     let hor = "-";
     let vert = "|"
     let left = '\\'; 
     let right = "/";
     let plus = "+";

     for (let i = 0; i < n; i++){
          let j = 0;
          while (j < n){
               console.log('+')
                n -= 1;
          }
     }
};
drawStar(1)

module.exports = { drawStairs, drawStar };
