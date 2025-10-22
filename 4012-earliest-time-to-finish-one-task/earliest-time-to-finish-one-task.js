/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let max=Infinity
    for(i=0;i<tasks.length;i++){
       let sum=tasks[i][0]+tasks[i][1]
       if(sum<max){
        max=sum
       }
    }
    return max
};