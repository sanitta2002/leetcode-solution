/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    let seen=new Set()
    let pos=1
    let step=1
    while(!seen.has(pos)){
        seen.add(pos)
        pos=((pos-1+step*k)%n)+1
        step++
    }
    let arr=[]
    for(let i=1;i<=n;i++){
        if(!seen.has(i)){
            arr.push(i)
        }
    }
    return arr
};