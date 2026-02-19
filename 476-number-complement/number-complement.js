/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let n=num.toString(2)
    let count=''
    for(let bit of n){
        if(bit==='0'){
            count+='1'
        }else{
            count+='0'
        }
    }
   return Number('0b'+count)
    
};