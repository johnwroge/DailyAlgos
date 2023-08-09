

function hidden(str) {
    const candidates = ['cat', 'referee', 'cat'];
    
    str = str.split('').sort().join('')
    for (let word of candidates) {
        const temp = word;
        let i = 0, j = 0;
        let string = "";
        word = word.split('').sort().join('')
        while (j < str.length) { // Change the condition here
            if (word[i] === str[j]) {
                string += str[j];
                i += 1; // Increment i when characters match
            }
            j += 1; // Always increment j
        }

        if (word === string) return temp;
    }
    
    return "-";
}
console.log(hidden('agdfgcsdfsdfdft'))