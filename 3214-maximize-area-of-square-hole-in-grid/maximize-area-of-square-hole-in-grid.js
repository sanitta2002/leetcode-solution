/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
   function a(arr){
    arr.sort((a,b)=>a-b)
    let maxl=1 
    let cur=1
    for(let i=1;i<arr.length;i++){
        if(arr[i]==arr[i-1]+1){
            cur++
            maxl=Math.max(maxl,cur)

        }else{
            cur=1
        }
    }
    return maxl
   }
   let maxH=a(hBars)
   let maxV=a(vBars)
   let b= Math.min(maxH,maxV)+1
   return b*b

};