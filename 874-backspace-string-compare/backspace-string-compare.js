/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let a=[]
    let b=[]
    for(i=0;i<s.length;i++){
        if(s[i]!=='#'){
            a.push(s[i])
        }else{
            a.pop()
        }
    }
    for(i=0;i<t.length;i++){
        if(t[i]!=='#'){
            b.push(t[i])
        }else{
            b.pop()
        }
    }
    return a.join('')===b.join('')
};