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

/*
You are given a string s. Your task is to count the number of ways of splitting s into three non-empty parts a, b and c (s = a + b + c) in such a way that a + b, b + c and c + a are all different strings.

NOTE: + refers to string concatenation.

Example

For s = "xzxzx", the output should be solution(s) = 5.

Consider all the ways to split s into three non-empty parts:

If a = "x", b = "z" and c = "xzx", then all a + b = "xz", b + c = "zxzx" and c + a = xzxx are different.
If a = "x", b = "zx" and c = "zx", then all a + b = "xzx", b + c = "zxzx" and c + a = zxx are different.
If a = "x", b = "zxz" and c = "x", then all a + b = "xzxz", b + c = "zxzx" and c + a = xx are different.
If a = "xz", b = "x" and c = "zx", then a + b = b + c = "xzx". Hence, this split is not counted.
If a = "xz", b = "xz" and c = "x", then all a + b = "xzxz", b + c = "xzx" and c + a = xxz are different.
If a = "xzx", b = "z" and c = "x", then all a + b = "xzxz", b + c = "zx" and c + a = xxzx are different.
Since there are five valid ways to split s, the answer is 5.
*/

function solution(s) {
  const n = s.length;
  let count = 0;

  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const a = s.substring(0, i);
      const b = s.substring(i, j);
      const c = s.substring(j);

      if (a + b !== b + c && b + c !== c + a && c + a !== a + b) {
        count++;
      }
    }
  }

  return count;
}


/*
A sawtooth sequence is a sequence of numbers that alternate between increasing and decreasing. In other words, each element is either strictly greater than its neighbouring elements or strictly less than its neighbouring elements.

examples

Given an array of integers arr, your task is to count the number of contiguous subarrays that represent a sawtooth sequence of at least two elements.

Example

For arr = [9, 8, 7, 6, 5], the output should be solution(arr) = 4.

Since all the elements are arranged in decreasing order, it won't be possible to form any sawtooth subarrays of length 3 or more. There are 4 possible subarrays containing two elements, so the answer is 4.

For arr = [10, 10, 10], the output should be solution(arr) = 0.

Since all of the elements are equal, none of subarrays can be sawtooth, so the answer is 0.

For arr = [1, 2, 1, 2, 1], the output should be solution(arr) = 10.

All contiguous subarrays containing at least two elements satisfy the condition of problem. There are 10 possible contiguous subarrays containing at least two elements, so the answer is 10.

Input/Output

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.integer arr

An array of integers.

Guaranteed constraints:
2 ≤ arr.length ≤ 105,
-109 ≤ arr[i] ≤ 109.

[output] integer64

Return the number of sawtooth subarrays.


*/

/*
As we iterate, every time we flip between increasing and decreasing of subarray length 2,
 the number of contiguous arrays goes up by the current streak of flips in a row. e.g. [1, 2, 1, 2, 1]
 has 4 flips in a row so 1 + 2 + 3 + 4 = 10
When we break out of a sawtooth streak, that is, when we increase twice in a row or decrease twice in a row, 
the longest contiguous subarray now is just 2, so we reset the counter to 1 if the two values are not equal 
(since that is a valid sawtooth) or 0 if the values are the same.
Example with streaks and broken streaks: [1, 7, 3, 4, 5]. we maintain a streak of 3 as we iterate 
([1, 7], [7, 3], [3, 4]), then [4, 5] breaks this streak since [3, 4] was also increasing, so we have the final count as (3 + 2 + 1) + 1 = 7 possible sawtooths.
*/

function solution(arr) {
  if (arr.length < 2) {
    return 0;
  }

  let count = 0;
  let streak = 0;
  let prevIncreasing = null;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      prevIncreasing = null;
      streak = 0;
    } else {
      const currIncreasing = arr[i] > arr[i - 1];
      if (currIncreasing !== prevIncreasing) {
        // keep track of streak of flips between increasing and decreasing
        streak++;
        prevIncreasing = currIncreasing;
      } else {
        // when we break out of a streak, we reset the streak counter to 1
        streak = 1;
      }

      // number of sawtooth contiguous subarrays goes up by the current streak
      count += streak;
    }
  }

  return count;
}

// Test cases
console.log(solution([9, 8, 7, 6, 5])); // Output: 4
console.log(solution([10, 10, 10])); // Output: 0
console.log(solution([1, 2, 1, 2, 1])); // Output: 10
