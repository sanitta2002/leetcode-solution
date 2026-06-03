/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    function a(start1,d1,start2,d2){
        let minEnd=Infinity
        for(let i=0;i<start1.length;i++){
            minEnd=Math.min(minEnd,start1[i]+d1[i])
        }
        let ans=Infinity
        for(let i=0;i<start2.length;i++){
          let finish = Math.max(minEnd,start2[i])+d2[i]
           ans=Math.min(ans,finish)
        }
       return ans
    }
    let land =a(landStartTime,landDuration,waterStartTime,waterDuration)
    let water =a(waterStartTime,waterDuration,landStartTime,landDuration)
    return Math.min(land,water)
};