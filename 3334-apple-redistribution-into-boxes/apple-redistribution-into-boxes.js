/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let totalApple=0
    let boxCount =0
    for(i=0;i<apple.length;i++){
        totalApple+=apple[i]
    }
   
    capacity.sort((a,b)=>b-a)
    for(let i=0;i<capacity.length;i++){
        totalApple-=capacity[i]
        boxCount++
        if(totalApple<=0){
            break
        }
    }
     return boxCount
};