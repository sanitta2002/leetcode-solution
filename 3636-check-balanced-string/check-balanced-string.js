/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let even=0
    let odd=0
    let str=num.split('').map(Number)
    for(i=0;i<str.length;i++){
        if(i%2===0){
            even+=str[i]
        }else{
            odd+=str[i]
        }
    }
    return even===odd
};