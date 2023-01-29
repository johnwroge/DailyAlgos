/*
76. Minimum Window Substring
Hard
14.2K
614
Companies
Given two strings s and t of lengths m and n respectively, return the minimum window 
substring
 of s such that every character in t (including duplicates) is included in the window. 
 If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

 

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
Example 2:

Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.
Example 3:

Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.
Since the largest window of s only has one 'a', return empty string.
 

Constraints:

m == s.length
n == t.length
1 <= m, n <= 105
s and t consist of uppercase and lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 
//v1

/*
This is actually very similar to the Permutation in String problem. The difference is that we don't 
match based on string length since we aren't finding an exact permutation/anagram. Instead, we want 
the minimal substring which means that we move our window based on finding the smallest possible solution 
that takes care of the counts of all the characters in t. However, instead of keeping track of checking the
 exact count of each character each time we encounter a matching a character in s, we instead only need to
  keep track of how many unique characters there are in t and when a unique character goes down to 0 
  (or less, since having more characters than we need is okay too). Since the length only goes down each 
  time a character reaches exactly 0, we will never reach the count of all unique characters until every unique
   character has reached 0.

The key insight is that once we find the first substring that satisfies the condition, we need to start moving
 the left part of the window until we have the minimal substring that satisfies it since we don't necessarily 
 need all the characters on the left. In the test case provided:

s = "ADOBECODEBANC"
t = "ABC"

The minimal substring is just BANC, but we won't encounter it until we've covered all of s. At that point,
 we need to trim our substring from the left until we get to the minimal substring which can be accomplished 
 with a while loop that moves the left pointer while the substring condition is true.
*/
var minWindow = function(s, t) {
    if (t.length > s.length) return '';
    
    const neededChars = {};
    
    for (let char of t) {
        neededChars[char] = (neededChars[char] || 0) + 1;
    }
    
    let left = 0;
    let right = 0;
    let neededLength = Object.keys(neededChars).length;
    let substring = '';
    
    while (right < s.length) {
        const rightChar = s[right];
        neededChars[rightChar]--;
        if (neededChars[rightChar] === 0) neededLength--;
        
        while (neededLength === 0) {
            if (!substring || substring.length > right - left + 1) {
                substring = s.slice(left, right + 1);
            }
            
            const leftChar = s[left];
            // If the leftChar in charMap is at exactly 0 before being 
            // incremented, we now need more leftChars so that its count
            // in charMap goes down to exactly 0
            if (neededChars[leftChar] === 0) {
                neededLength++;
            }
            neededChars[leftChar]++;
            left++;
               
        }
        
        right++;
    }
    
    return substring;
};


//v2

/**
 * https://leetcode.com/problems/minimum-window-substring/
 * Time O(N + M) | SpaceO(N + M)
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function (s, t) {
    const isMissingArgs = !s.length || !t.length;
    if (isMissingArgs) return '';

    const frequencyMap = getFrequencyMap(t);
    const { start, end } = getWindowPointers(s, t, frequencyMap);

    return getSubString(s, start, end);
};

const getFrequencyMap = (str, frequencyMap = new Map()) => {
    for (const char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    return frequencyMap;
};

const getWindowPointers = (s, t, frequencyMap) => {
    let [left, right, matched, start, end] = [0, 0, 0, 0, s.length + 1];

    while (right < s.length) {
        matched = addRightFrequency(s, right, frequencyMap, matched);

        const canSlide = () => matched === t.length;
        while (canSlide()) {
            const window = right - left + 1;

            const isSmaller = window < end;
            if (isSmaller) {
                [start, end] = [left, window];
            }

            matched = subtractLeftFrequency(s, left, frequencyMap, matched);
            left++;
        }

        right++;
    }

    return { start, end };
};

const addRightFrequency = (s, right, frequencyMap, matched) => {
    const char = s[right];

    if (frequencyMap.has(char)) {
        frequencyMap.set(char, frequencyMap.get(char) - 1);

        const isInWindow = 0 <= frequencyMap.get(char);
        if (isInWindow) matched++;
    }

    return matched;
};

const subtractLeftFrequency = (s, left, frequencyMap, matched) => {
    const char = s[left];

    if (frequencyMap.has(char)) {
        const isOutOfWindow = frequencyMap.get(char) === 0;
        if (isOutOfWindow) matched--;

        frequencyMap.set(char, frequencyMap.get(char) + 1);
    }

    return matched;
};

const getSubString = (s, start, end) =>
    end <= s.length ? s.slice(start, start + end) : '';

