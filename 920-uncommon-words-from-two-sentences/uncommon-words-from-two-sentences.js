/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let str=(s1+' '+s2).split(' ')
   
    let obj={}
    
    for(let i=0;i<str.length;i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }else{
            obj[str[i]]=1
        }
    }
   let res=[]
   for(let key in obj){
    if(obj[key]==1){
        res.push(key)
    }
   }
   return res
};