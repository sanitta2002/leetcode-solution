/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
     arr2.sort((a,b)=>a-b)
    
    let count=0
    for(let i=0;i<arr1.length;i++)
    {
       let value=true
        for(let j=0;j<arr2.length;j++)
        {
            if(Math.abs(arr1[i]-arr2[j])<=d)
            {
                value=false
                break
            }
        }
        if(value)
        {
            count++
        }
    }

    return count
}