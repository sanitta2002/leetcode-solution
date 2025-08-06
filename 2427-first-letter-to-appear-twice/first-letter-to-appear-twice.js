/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let str=s.toLowerCase()
    let seen= new Set()
    for(let char of str){
        if(seen.has(char)){
            return char
        }
        seen.add(char)
    }
};