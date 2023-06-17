
var checkInclusion = function(s1, s2) {
    let count = {};

    for (let char of s1){
        count[char] ? count[char] += 1 : count[char] = 1;
    }

    
    let store = [];

    for (let i = 0; i < s2.length; i++){
        if (count[s2[i]]){
            let poss  = s2.substring(i, i + s1.length)
            if (poss.length === s1.length) store.push(poss)
        }
    }
  
    while (store.length){
        let newObj = {...count}
        let cand = store.pop();
        let j = 0; 
        while (j < cand.length){
            if (newObj[cand[j]]){
                newObj[cand[j]] -= 1; 
            }
            j++
        }
        if (Object.values(newObj).every(el => el <= 0)){
            return true
        }
    }
    
  return false;  
};

console.log(checkInclusion("adc","dcda"))
