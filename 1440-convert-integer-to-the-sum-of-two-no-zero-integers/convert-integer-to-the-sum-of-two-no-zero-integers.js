/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(var i=0;i<=n;i++)
{
    let A=i
    let B=n-i
    if(!A.toString().includes(0) && !B.toString().includes(0))
    {
        return [A,B]
    }
}
};