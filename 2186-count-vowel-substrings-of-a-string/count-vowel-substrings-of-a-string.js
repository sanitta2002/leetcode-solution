/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let v=new Set(['a', 'e', 'i', 'o',  'u'])
    let count=0
    for(i=0;i<word.length;i++){
        let set=new Set()
        for(j=i;j<word.length;j++){
            if(!v.has(word[j])){
                break
            }
            set.add(word[j])
            if(set.size===5){
                count++
            }
        }
    }
    return count
};