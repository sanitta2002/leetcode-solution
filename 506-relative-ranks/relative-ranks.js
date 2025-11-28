/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
let res=[]
let map={}
 let sort= [...score].sort((a,b)=>b-a)
  for(i=0;i<sort.length;i++){
    if(i===0){
        map[sort[i]]="Gold Medal"
    }else if(i===1){
        map[sort[i]]="Silver Medal"
    }else if(i===2){
         map[sort[i]]="Bronze Medal"
    }else{
        map[sort[i]]=(i+1).toString()
    }
  }
  for(i=0;i<score.length;i++){
    res.push(map[score[i]])
  }
  return res
};