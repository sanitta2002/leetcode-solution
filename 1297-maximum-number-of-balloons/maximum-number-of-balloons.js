/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let obj={}
    for(i=0;i<text.length;i++){
        if(obj[text[i]]){
            obj[text[i]]++
        }else{
            obj[text[i]]=1
        }
    }
  
    let maxBalloon=Math.min(obj['b'] || 0, 
        obj['a'] || 0, 
        Math.floor((obj['l'] || 0) / 2), 
        Math.floor((obj['o'] || 0) / 2), 
        obj['n'] || 0)
        return maxBalloon
};