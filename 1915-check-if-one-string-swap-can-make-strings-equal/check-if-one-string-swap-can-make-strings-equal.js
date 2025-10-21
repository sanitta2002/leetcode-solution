/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if(s1===s2) return true
    let a=s1.split('')
    for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            [a[i],a[j]]=[a[j],a[i]]
            if(a.join('')===s2){
                return true
            }
             [a[i],a[j]]=[a[j],a[i]]
        }
    }
    return false
};