/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let spaces=0
    for(let ch of text){
        if(ch===' '){
            spaces++
        }
    }
    let word=text.trim().split(/\s+/)
    if(word.length===1){
        return word[0]+' '.repeat(spaces)
    }
    let spacebtw=Math.floor(spaces/(word.length-1))
    let extra=spaces%(word.length-1)

    
    return word.join(' '.repeat(spacebtw))+' '.repeat(extra)
    
};