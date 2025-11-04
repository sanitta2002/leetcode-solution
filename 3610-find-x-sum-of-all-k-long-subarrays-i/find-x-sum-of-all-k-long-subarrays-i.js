/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    let res=[]
    for(i=0;i<=nums.length-k;i++){
        let sub=nums.slice(i,i+k)
        let obj={}
        for(let num of sub){
            if(obj[num]) {
                obj[num]++
            }else{
                obj[num]=1
            }
        }
       let arr=Object.entries(obj)
       arr.sort((a,b)=>{
        if(b[1]===a[1]){
            return b[0]-a[0]
        }
        return b[1]-a[1]
       })

       let sum=0
       for(j=0;j<Math.min(x,arr.length);j++){
        sum+=Number(arr[j][0]) * arr[j][1];
       }
       res.push(sum)
    }
    return res
};