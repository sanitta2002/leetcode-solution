/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let w=s.split(' ')
    if(pattern.length !== w.length) return false
     let map1 = Object.create(null);
    let map2 = Object.create(null);
    for(let i=0;i<pattern.length;i++){
        let l=pattern[i]
        let word=w[i]
        if(map1[l]&&map1[l]!==word){
           return false
        }
        if(map2[word] && map2[word] !==l){
            return false
        }
        map1[l]=word
        map2[word]=l
    }
    return true
};