/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let l=1
    let count=0
    for(let ch of s){
      let w = widths[ch.charCodeAt(0) - 97]
      if(count+w>100){
        l++
        count=w
      }else{
        count+=w
      }
    }
    return [l,count]
};