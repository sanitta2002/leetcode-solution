/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let arr=[]
    let minsum=Infinity
   for(let i=0;i<list1.length;i++){
    for(let j=0;j<list2.length;j++){
        if(list1[i]===list2[j]){
           let sumOfIndex=i+j
           
          if(sumOfIndex<minsum){
            minsum=sumOfIndex
            arr=[list1[i]]
          }else if (sumOfIndex===minsum){
            arr.push(list1[i])
          }

        }
         
     }
   
   }
   return arr
};