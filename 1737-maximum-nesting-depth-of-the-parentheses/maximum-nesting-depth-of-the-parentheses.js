/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    
     let a= s.split('')
    let count=0
    let max=0
    for(var i=0;i<a.length;i++)
    {
        if(a[i]==='(')
        {
            count++
            max=Math.max(max,count)
        }
        else if(a[i]===')')
        {
            count--
        }
    }
    return max
};