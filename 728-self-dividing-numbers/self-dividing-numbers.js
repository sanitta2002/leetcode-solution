/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let arr=[]
    for(let i=left; i<=right;i++){
        let f=true
        let num=i
        while(num>0){
            let rem=num%10
            num=Math.floor(num/10)
            if(rem===0 || i%rem!=0){
                f=false
                break
            }
        }
        if(f){
            arr.push(i)
        }
    }
    return arr
};