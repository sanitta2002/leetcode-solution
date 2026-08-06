/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
     while(true){
        let pro=1
        let str=n.toString()

        for(let digit of str){
            pro*=Number(digit)

        }
        if(pro%t===0){
            return n
        }
        n++
    }
};