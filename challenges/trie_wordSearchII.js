/*
212. Word Search II
Hard
8.2K
386
Companies
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent 
cells are horizontally or vertically neighboring. The same letter cell may not 
be used more than once in a word.

 

Example 1:


Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
Example 2:


Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.
*/

/**
 * 
 * 
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 const endWord = '*'

 //Solution 1
 //create trie class
 class Trie{
    //constructor function should take a words parameter
     constructor(words){
        //create a root property and assign to an empty object
         this.root = {}
         //create a isWord property and initialize to false (bool)
         this.isWord = false
         //iterate over the words param, and for each word invoke the addWord helper function passing in the word as arg
         words.forEach(word => this.addWord(word))
     }
     //create an addWord method that takes a word as a parameter
     addWord(word){
        //initiaze a current variable to this.root
         let current = this.root
         //iterate over the each letter of the word
         for(const letter of word){
            //check if the current variable does not contain a key of the letter
             if(!current[letter]){
                //if true, create a key of letter and a value of the empty object
                 current[letter] = {}
             }
             //reassign the current variable to be the newly created value in the current object
             current = current[letter]   
         }
         //outside of the loop, for the last letter update the isWord property to be true
         current.isWord = true
     }
     
 }
 
 //create a helper function called findwords that takes a board and a words param
 var findWords = function(board, words) {
    //create a new instance of a trie passing in the words into the constructor function
     const trie = new Trie(words)
     //create a result variable and assign to a new instance of a Set
     const result = new Set()
     //create a visited argument and assign to a new instance of a Set
     const visited = new Set()
     
     //create a dfs helper function that takes two indices (i, j), a node, and a subresult
     const dfs = (i, j, node, subResult) => {
         //base cases: out of bounds, letter does not exist in next prefix
         if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || !node[board[i][j]] || visited.has(`${i} ${j}`)){
             return
         }
         //the the two indices to the visited set 
         visited.add(`${i} ${j}`)
         //add the current board value to the subresult (string)
         subResult += board[i][j]
         //reassign the node to be the value at the key of the current character in the node object
         node = node[board[i][j]]
         //check if the isword property on the node is truthy
         if(node.isWord){
            //if true, add the subresult to the result
             result.add(subResult)    
         }
         //recursive cases: invoke the dfs helper function four times for each direction (node and subResult are passed)
         dfs(i, j+1, node, subResult)
         dfs(i, j-1, node, subResult)
         dfs(i-1, j, node, subResult)
         dfs(i+1, j, node, subResult)
         
         //once the recursive calls return, delete the current indices from the visted set (set.delete function)
         visited.delete(`${i} ${j}`)
         
     }
     //iterate over the row and column of the board
     for(let i = 0; i < board.length; i++){
         for(let j = 0; j < board[0].length; j++){
            //check if the current board character exists as a key in the trie.root object
             if(trie.root[board[i][j]]){
                //if yes, invoke the dfs helper function with the current indices, the trie root and an empty string
                 dfs(i, j, trie.root, "")
             }
         }
     }
     
     //return the result spread into an array
     return [...result]
 
 };

//Solution II
 var findWords = function(board, words) {
    //create a result array and tree object
    const res = [], trie = {};
    //iterate
    for (let word of words) {
      let curNode = trie;
      for (let char of word) {
        curNode[char] = curNode[char] || {};
        curNode[char].count = curNode[char].count + 1 || 1;
        curNode = curNode[char];
      };
      curNode.end = word;
    }
    
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (trie[board[row][col]]) traverse(row, col);
      }
    }
    
    return res;
    
    function traverse(row, col, node = trie) {
      if (!board[row][col]) return;
      
      const char = board[row][col], curNode = node[char];
      if (!curNode) return;
      
      if (curNode.end) {
        res.push(curNode.end);
        let toDelete = trie;
        for (let char of curNode.end) {
          toDelete[char].count--;
          if (!toDelete[char].count) {
            delete(toDelete[char]);
            break;
          }
          toDelete = toDelete[char];
        }
        curNode.end = null;
      }
      
      board[row][col] = 0;
      (col - 1 >= 0) && traverse(row, col - 1, curNode);
      (col + 1 < board[row].length) && traverse(row, col + 1, curNode);
      (row - 1 >= 0) && traverse(row - 1, col, curNode);
      (row + 1 < board.length) && traverse(row + 1, col, curNode);
      board[row][col] = char;
    }
  };