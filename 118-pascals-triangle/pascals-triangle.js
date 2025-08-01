/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res=[]
    for(i=0;i<numRows;i++){
        let row=[1]
        for(let j=1;j<i;j++){
            row.push(res[i-1][j-1]+res[i-1][j])
        }
        if(i>0){
            row.push(1)
           
        }
         res.push(row)
    }
    return res
};