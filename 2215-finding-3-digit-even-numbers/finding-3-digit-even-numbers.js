/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let set = new Set()
    for(let i=0;i<digits.length;i++){
        for(let j=0;j<digits.length;j++){
            for(let k=0;k<digits.length;k++){
                if(i==j || j===k || k===i) continue

                let nums = digits[i]*100+digits[j]*10+digits[k]
                if(nums>=100 && nums%2==0){
                    set.add(nums)
                }
            }
        }
    }
    return [...set].sort((a,b)=>a-b)
};