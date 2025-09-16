/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let arr=[]
    for(i=0;i<order.length;i++){
        for(j=0;j<friends.length;j++){
            if(friends[j]===order[i]){
                console.log(order[i])
                arr.push(order[i])
            }
        }

    }
    return arr
};