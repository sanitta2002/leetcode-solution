/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    let dis=Infinity
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[i] === nums[j] && nums[j] === nums[k]){
                    let cur=Math.abs(i - j)+Math.abs(j - k)+Math.abs(k - i)
                    dis=Math.min(dis,cur)
                }
            }
        }
    }
    return dis === Infinity ? -1 : dis;
};