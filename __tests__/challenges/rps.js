/*

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters 'r', 'p', and 's'.

For example:

rps(0) -> ['']
rps(1) -> ['r', 'p', 's']
rps(2) -> ['rr', 'rp', 'rs', 'pr', 'pp', 'ps', 'sr', 'sp', 'ss']
rps(3) -> [
  'rrr', 'rrp', 'rrs', 'rpr', 'rpp', 'rps', 'rsr', 'rsp', 'rss',
  'prr', 'prp', 'prs', 'ppr', 'ppp', 'pps', 'psr', 'psp', 'pss',
  'srr', 'srp', 'srs', 'spr', 'spp', 'sps', 'ssr', 'ssp', 'sss'
]

The strings must be returned in the order suggested above.

*/

const rps = n => {

const results = [];
  //create dfs helper function
  const dfs = (n, str = "") => {
    //base case:
    if (str.length === n){
      results.push(str);
      return;
    }
    dfs(n, str + 'r');
    dfs(n, str + 'p')
    dfs(n, str + 's')
  }
  //call dfs with n
dfs(n)
//return results array
return results;
  
};


//console.log(rps(3))
/*

Extension:

Return an array of strings (all of length n) whose values are all the possible
ways of creating strings from the letters in 'chars'. Assume that there will be
no duplicates in 'chars'.

This is equivalent to returning all possible passwords of length n given a
character set 'chars'.

For example:

passwords('ab', 1) -> ['a', 'b']
passwords('abxy', 2) -> [
  'aa', 'ab', 'ax', 'ay',
  'ba', 'bb', 'bx', 'by',
  'xa', 'xb', 'xx', 'xy',
  'ya', 'yb', 'yx', 'yy'
]

The strings must be returned in order reflecting the order of letters in 'chars'

*/

const passwords = (chars, n) => {

  const results = [];
  //create dfs helper function
  const generate = (str) => {
    //base case:
    if (str.length === n){
      results.push(str);
      return;
    }
    //iterate over characters in chars
   for (const char of chars){
    generate(str + char)
   }
  }
  //call dfs with n
dfs('')
//return results array
return results; 
};

module.exports = {rps, passwords};
