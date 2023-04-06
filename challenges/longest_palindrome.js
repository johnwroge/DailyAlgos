/*
409. Longest Palindrome
Easy
4.6K
281
Companies
Given a string s which consists of lowercase or uppercase letters, 
return the length of the longest palindrome that can be built with those 
letters.

Letters are case sensitive, for example, "Aa" is not considered a
 palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd",
 whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

var longestPalindrome = function(s){


    const hashMap = {};
    let answer = 0; 

    for (let char of s){
        cache[char] = (cache[char] || 0) + 1;
        if (cache[char] % 2 === 0){
            answer += 2; 
        }
    }
return answer < s.length ? answer + 1: answer; 
}