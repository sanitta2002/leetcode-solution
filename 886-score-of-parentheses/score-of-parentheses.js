/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [0]
    for(let ch of s){
        if(ch==="("){
            stack.push(0)
        }else{
            let current = stack.pop()
            if(current===0){
                current=1
            }else{
                current=2*current
            }
            stack[stack.length - 1] += current;
        }
    }
    return stack[0]
};