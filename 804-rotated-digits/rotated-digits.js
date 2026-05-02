/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let count = 0
    for(let i=1;i<=n;i++){
        let num=i
        let isValid = true
        let hasChange = false
        while(num>0){
            let digit=num%10
            if (digit === 3 || digit === 4 || digit === 7) {
                isValid = false;
                break
            }
             if (digit === 2 || digit === 5 || digit === 6 || digit === 9) {
                hasChange = true;
            }
            num = Math.floor(num / 10)

        }
         if (isValid && hasChange) {
            count++
        }
    }
    return count
};