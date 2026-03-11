/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let bit=n.toString(2)
    let count=''
    for(let b of bit){
        if(b==='0'){
          count+='1'
        }else{
            count+='0'
        }
    }
    return Number('0b'+count)
};