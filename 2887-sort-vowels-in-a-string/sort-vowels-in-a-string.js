/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let v=new Set(['a','e','i','o','u','A','E','I','O','U'])

    let arr=[]
    for(let char of s){
        if(v.has(char)){
            arr.push(char)
        }
    }
    arr.sort()

    let res=''
    let i=0
    for(let ch of s){
        if(v.has(ch)){
            res+=arr[i++]
        }else{
            res+=ch
        }
    }

  return res

};