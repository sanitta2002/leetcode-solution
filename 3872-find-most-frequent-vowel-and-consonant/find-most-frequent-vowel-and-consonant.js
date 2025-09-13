/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let v='aeiou'
    let str=s.toLowerCase()
    let l=str.split('').filter(c=>c>='a' && c<='z')
   
   let freq = {};
    for (let ch of l) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    
    let mostV=''
    let montC=''
    let maxV=0
    let maxC=0

    for(let key in freq){
         if(v.includes(key)){
            if(freq[key]>maxV){
                maxV=freq[key]
                mostV=key
            }
         }else{
            if(freq[key]>maxC){
                maxC=freq[key]
                mostC=key
            }
         }
    }
     return maxV+maxC
};