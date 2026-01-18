/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false
    let maps={}
    let mapT={}
    for(let i=0;i<s.length;i++){
        if(maps[s[i]]!==mapT[t[i]]){
            return false
        }
        maps[s[i]]=i
        mapT[t[i]]=i
    }
    return true
};