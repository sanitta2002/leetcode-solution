/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let res=0
    for(let num of nums){
        let count=0
        let sum=0
        for(let i=1;i<=num;i++){
            if(num%i===0){
                count++
                sum+=i
            }
            if(count>4) break
        }
        if(count===4){
            res+=sum
        }
       
    }
    return res
};