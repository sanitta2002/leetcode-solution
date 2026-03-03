/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
  if(n===1) return "0"
  let len=Math.pow(2, n) - 1
  let mid = Math.floor(len / 2) + 1
  if(k===mid) return "1"
  if(k<mid){
    return findKthBit(n - 1, k)

    }else{
        let a=len-k+1
    let bit=findKthBit(n-1,a)
     return bit === "0" ? "1" : "0";
    }
   
  
};