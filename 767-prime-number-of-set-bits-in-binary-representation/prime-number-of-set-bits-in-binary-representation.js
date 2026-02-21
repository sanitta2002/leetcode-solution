/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let arr=[]
    for(let i=left;i<=right;i++){
        let b=i.toString(2)
        let count=0
        for(let bit of b){
            if(bit==='1'){
                count++
            }
        }
        arr.push(count)
    }

    let count=0
    for(let i=0;i<arr.length;i++){
        let isPrime=true
        if(arr[i]===1) continue
        for(let j=2;j<arr[i];j++){
            if(arr[i]%j===0){
                isPrime=false
                break
            }
        }
        if(isPrime){
            count++
        }
    }
    return count
};