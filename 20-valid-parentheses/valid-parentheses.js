/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
        let a=[]
    let str =s.split('')
    for(let char of str)
    {
        if(char=='(' || char=='[' || char=='{')
        {
           a.push(char)
        }
        else{
            if(a.length==0)
            {
                return false
            }else{
                let last =a.pop()
                if(char==')' && last!=='('|| 
                char=='}' && last!=='{' || 
                char==']' && last!=='[' )
                {
                    return false
                }
            }
        }
    }
    return a.length==0
};