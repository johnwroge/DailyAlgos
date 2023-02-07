/*
211. Design Add and Search Words Data Structure
Medium
5.8K
341
Companies
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word 
or false otherwise. word may contain dots '.' where dots can be matched with any letter.
 

Example:

Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
 
*/

var WordDictionary = function() {
    //need a way to keep track of characters
    this.n = {};
    this.isWord = false; 
    return this;   
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {

    //initialize current to this
    let current = this;
    //iterate over word
    for (let i = 0; i < word.length; i++){ 
        //check if the character does not exist in this.n
        if (!this.n[word[i]]){
            //if not, create a new word dictionary for this character in this.
            this.n[word[i]] = new WordDictionary(word[i]);
        }
    //for the last character assign the this,isWord property to true
    this.n[word[i]].isWord = true; 
    }
   
};

/** 
 * @param {string} word
 * @return {boolean}
 */
//use recursive method to search through the word
    //use default params start (index at 0), newCurrent to be null
WordDictionary.prototype.search = function(word, start = 0, newCurr = null) {
    //initialize this value to be current
    let curr = this;
    //check if current is not null
    if (newCurr != null)
    //than assign the current variable to be the newCurr (default param)
        curr = newCurr;
    for (let i = start; i < word.length; i++) {
        //initialize a character to be the char at the current index
        let char = word[i];
        //if the char is a period
        if (char == '.') {
            //assign the letters to be the keys in the current object in constructor
            let letters = Object.keys(curr.n);
            //create a result variable to be false
            let res = false;
            //iterate over the letters from keys in object
            for (let letter of letters) {
                //reassign result to be either result, or the recursive call with updated
                //params -> word, increment index, and the current character curr.n[letter]
                res = res || this.search(word, i + 1, curr.n[letter]);
            }
            //return the result
            return res;
            //base case: otherwise if the character doesn't exist, return false
        } else if (!curr.n[char]) {
            return false;
        }
        //reassign current to be the current at char of constructor object
        curr = curr.n[char];
    }
    //if you didn't return false, the word is present and you can return true; 
    return curr.isWord;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

//neetcode

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

 class TrieNode {
    constructor() {
        this.children = {};
        this.isWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /* Time O(N) | Space O(N) */
    addWord(word, node = this.root) {
        for (const char of word) {
            const child = node.children[char] || new TrieNode();

            node.children[char] = child;

            node = child;
        }

        node.isWord = true;
    }

    /* Time O(N) | Space O(N) */
    search(word) {
        return this.dfs(word, this.root, 0);
    }

    dfs(word, node, level) {
        if (!node) return false;

        const isWord = level === word.length;
        if (isWord) return node.isWord;

        const isWildCard = word[level] === '.';
        if (isWildCard) return this.hasWildCard(word, node, level);

        return this.dfs(word, node.children[word[level]], level + 1);
    }

    hasWildCard(word, node, level) {
        for (const char of Object.keys(node.children)) {
            const child = node.children[char];

            const hasWord = this.dfs(word, child, level + 1);
            if (hasWord) return true;
        }

        return false;
    }
}