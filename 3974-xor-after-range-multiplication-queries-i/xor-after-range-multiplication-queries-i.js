/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
     let MOD = 1000000007;
    for(let i=0;i<queries.length;i++){
       let l = queries[i][0];
        let r = queries[i][1];
        let k = queries[i][2];
        let v = queries[i][3];
        let idx=l
       while(idx<=r){
        nums[idx] = (nums[idx] * v) % MOD 
        idx += k
       }

    }
    let xor=0
    for (let num of nums) {
        xor ^= num
    }

    
    return xor
    
};