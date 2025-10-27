/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let arr=[]

    for(i=0;i<bank.length;i++){
        let str=bank[i].split('')
        let count=0
        for(let ch of str){
            if(ch==='1'){
                count++
            }
        }
       if(count>0){
        arr.push(count)
       }
    }
  let sum=0
  for(i=0;i<arr.length-1;i++){
    sum+=arr[i]*arr[i+1]
  }
  return sum
  
};