/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let arr=[]
    let a=[...score].sort((a,b)=>b-a)
    let res=new Array(score.length)
    for(let i=0;i<a.length;i++){
        let idx = score.indexOf(a[i])
        if(i===0){
            res[idx]="Gold Medal"
        }else if(i===1){
            res[idx]="Silver Medal"
        }else if(i===2){
             res[idx]="Bronze Medal"
        }else{
             res[idx]=(i+1).toString()
        }
    }
   return res
};