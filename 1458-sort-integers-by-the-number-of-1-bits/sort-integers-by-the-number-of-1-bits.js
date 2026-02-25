/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
        let bit=(n)=>n.toString(2).split('1').length-1
        let res=arr.sort((a,b)=>{
            let ab=bit(a)
            let bb=bit(b)
            if(ab===bb){
                return a-b
            }
            return ab-bb
        })
  return res
    
};