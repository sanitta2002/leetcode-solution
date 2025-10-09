/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let num=grid.flat()
    let a=num.sort((a,b)=>a-b)
    let array=[]
    for(i=0;i<=a.length;i++){
        if(a[i]===a[i+1]){
            array.push(a[i])
            break
        }
    }
    for(j=1;j<=a.length;j++){
        if(!a.includes(j)){
            array.push(j)
        }
    }
      return array
};