/*
You are given a string s. Consider the following algorithm applied to this string:

Take all the prefixes of the string, and choose the longest palindrome between them.
If this chosen prefix contains at least two characters, cut this prefix from s and go back to the 
first step with the updated string. Otherwise, end the algorithm with the current string s as a result.
Your task is to implement the above algorithm and return its result when applied to string s.

Note: you can click on the prefixes and palindrome words to see the definition of the terms if you're not familiar with them.

Example

For s = "aaacodedoc", the output should be solution(s) = "".

The initial string s = "aaacodedoc" contains only three prefixes which are also palindromes - "a", "aa", "aaa". The longest one between them is "aaa", so we cut it from s.
Now we have string "codedoc". It contains two prefixes which are also palindromes - "c" and "codedoc". The longest one between them is "codedoc", so we cut it from the current string and obtain the empty string.
Finally the algorithm ends on the empty string, so the answer is "".
For s = "codesignal", the output should be solution(s) = "codesignal".
The initial string s = "codesignal" contains the only prefix, which is also palindrome - "c". This prefix is the longest, but doesn't contain two characters, so the algorithm ends with string "codesignal" as a result.

For s = "", the output should be solution(s) = "".

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string s

A string consisting of English lowercase letters.

Guaranteed constraints:
0 ≤ s.length ≤ 1000.

[output] string

The result of the described algorithm.


*/

function solution(s) {
    if (!s) return '';
    const sLen = s.length;
    let finalRes = '';
  
    let targetStr = s;
    for (let i = 0; i < sLen; i++) {
      let maxPrefixLen = 0;
  
      for (let j = 1; j <= targetStr.length; j++) {
        let str = targetStr.substring(0, j);
        let strR = [...str].reverse().join('');
  
        if (str == strR) {
          maxPrefixLen = j;
        }
      }
      const prefix = targetStr.substring(0, maxPrefixLen);
      const prefixLen = prefix.length;
  
      if (prefixLen === 1) {
        finalRes = targetStr;
        break;
      }
  
      if (prefixLen === 0) {
        finalRes = '';
        break;
      }
      targetStr = targetStr.replace(prefix, '');
    }
  
    return finalRes;
  }



/*
Given an array of integers a, your task is to count the number of pairs i and j (where 0 ≤ i < j < a.length), such that a[i] and a[j] are digit anagrams.

Two integers are considered to be digit anagrams if they contain the same digits. In other words, one can be obtained from the other by rearranging the digits (or trivially, if the numbers are equal). For example, 54275 and 45572 are digit anagrams, but 321 and 782 are not (since they don't contain the same digits). 220 and 22 are also not considered as digit anagrams, since they don't even have the same number of digits.

Example

For a = [25, 35, 872, 228, 53, 278, 872], the output should be solution(a) = 4.

There are 4 pairs of digit anagrams:

a[1] = 35 and a[4] = 53 (i = 1 and j = 4),
a[2] = 872 and a[5] = 278 (i = 2 and j = 5),
a[2] = 872 and a[6] = 872 (i = 2 and j = 6),
a[5] = 278 and a[6] = 872 (i = 5 and j = 6).
Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer a

An array of non-negative integers.

Guaranteed constraints:
1 ≤ a.length ≤ 105,
0 ≤ a[i] ≤ 109.

[output] integer64

The number of pairs i and j, such that a[i] and a[j] are digit anagrams.
*/

solution2 = () => {

}


/*
 Question 1 of 2

You are given two arrays of integers a and b of the same length, and an integer k. We will be iterating through array a from left to right, and simultaneously through array b from right to left, and looking at pairs (x, y), where x is from a and y is from b. Such a pair is called tiny if the concatenation xy is strictly less than k.

Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through a and b.

Example

For a = [1, 2, 3], b = [1, 2, 3], and k = 31, the output should be
solution(a, b, k) = 2.

We're considering the following pairs during iteration:

(1, 3). Their concatenation equals 13, which is less than 31, so the pair is tiny;
(2, 2). Their concatenation equals 22, which is less than 31, so the pair is tiny;
(3, 1). Their concatenation equals 31, which is not less than 31, so the pair is not tiny.
As you can see, there are 2 tiny pairs during the iteration, so the answer is 2.

For a = [16, 1, 4, 2, 14], b = [7, 11, 2, 0, 15], and k = 743, the output should be
solution(a, b, k) = 4.

We're considering the following pairs during iteration:

(16, 15). Their concatenation equals 1615, which is greater than 743, so the pair is not tiny;
(1, 0). Their concatenation equals 10, which is less than 743, so the pair is tiny;
(4, 2). Their concatenation equals 42, which is less than 743, so the pair is tiny.
(2, 11). Their concatenation equals 211, which is less than 743, so the pair is tiny;
(14, 7). Their concatenation equals 147, which is less than 743, so the pair is tiny.
There are 4 tiny pairs during the iteration, so the answer is 4.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer a

An array of non-negative integers.

Guaranteed constraints:
0 ≤ a.length ≤ 105,
0 ≤ a[i] ≤ 104.


 */

function solution(a, b, k) {
    
    let count = 0;
    
    for (let i = 0, j = b.length - 1; i < a.length, j >= 0; i++, j--){
        let cand = "";
        cand += a[i] 
        cand += b[j];
        if (Number(cand) < k) count++
    }
    return count;

}


/*
You are given an array of integers a, where each element a[i] represents the length of a ribbon.

Your goal is to obtain k ribbons of the same length, by cutting the ribbons into as many pieces as you want.

Your task is to calculate the maximum integer length L for which it is possible to obtain at least k ribbons of length L by cutting the given ones.

Example

For a = [5, 2, 7, 4, 9] and k = 5, the output should be solution(a, k) = 4.

example

Here's a way to achieve 5 ribbons of length 4:

Cut the ribbon of length 5 into one ribbon of length 1 (which can be discarded) and one ribbon of length 4.
Cut the ribbon of length 7 into one ribbon of length 3 (which can be discarded) and one ribbon of length 4.
Use the existing ribbon of length 4 (no need to cut it)
Cut the ribbon of length 9 into two ribbons of length 4 (and one of length 1 which can be discarded)
Discard the ribbon of length 2.
And since it wouldn't be possible to make 5 ribbons of any greater length, the answer is 4.

For a = [1, 2, 3, 4, 9] and k = 6, the output should be solution(a, k) = 2.

Here's one way we could make 6 ribbons of length 2:

Cut the ribbon of length 9 into four ribbons of length 2 and one ribbon of length 1 (which won't be used).
Cut the ribbon of length 4 into two ribbons of length 2.
Ignore all other ribbons (1, 2, and 3). Even though ribbons with lengths 2 and 3 can also be used to obtain the ribbon of length 2, we don't need more than 6 ribbons of that length.
It would technically be possible to make 6 ribbons of a length as great as 2.25, but since only integer values are allowed, the answer is 2.


*/

function solution(a, k) {
    // Binary search helper function
    const binarySearch = (left, right) => {
        if (left > right) return left - 1;
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        for (let i = 0; i < a.length; i++) {
            count += Math.floor(a[i] / mid);
        }
        if (count >= k) return binarySearch(mid + 1, right);
        return binarySearch(left, mid - 1);
    };

    // Find the maximum and minimum ribbon lengths
    let maxRibbon = 0;
    for (let i = 0; i < a.length; i++) {
        maxRibbon = Math.max(maxRibbon, a[i]);
    }

    // Perform binary search within the range of maximum and minimum ribbon lengths
    return binarySearch(1, maxRibbon);
}

