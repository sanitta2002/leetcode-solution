/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let a=paragraph.toLowerCase().split(/[\s,!.?';]/).filter(word=>word!=='')
    let obj={}
    let max = 0;
    let result = "";
    for(let i=0;i<a.length;i++){
        if(obj[a[i]]){
            obj[a[i]]++
        }else{
            obj[a[i]]=1
        }
    }
    for(let key in obj){
        if(!banned.includes(key) &&obj[key]>max ){
            max=obj[key]
            result=key
        }
    }
    return result
};