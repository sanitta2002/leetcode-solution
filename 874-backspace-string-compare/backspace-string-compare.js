/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    let arr1=[]
    for(let i=0;i<s.length;i++){
        if(s[i]!=='#'){
            arr1.push(s[i])
        }else{
            arr1.pop()
        }
    }
    let arr2=[]
     for(let i=0;i<t.length;i++){
        if(t[i]!=='#'){
            arr2.push(t[i])
        }else{
            arr2.pop()
        }
    }
   return arr1.join('')===arr2.join('')
};