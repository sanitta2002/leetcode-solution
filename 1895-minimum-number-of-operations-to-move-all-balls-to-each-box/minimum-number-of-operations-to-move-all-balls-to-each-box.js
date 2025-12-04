/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let arr=[]
    for(let i=0;i<boxes.length;i++){
        let count=0
        for(let j=0;j<boxes.length;j++){
            if(boxes[j]==='1'){
               count+= Math.abs(i-j)
              
            }
        }
          arr.push(count)
    }
    return arr
};
