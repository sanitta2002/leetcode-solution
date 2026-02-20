/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let  firstrow ="qwertyuiop"
    let  secondrow ="asdfghjkl"
    let  thirdrow ="zxcvbnm"
    let arr=[]
    for(let i=0;i<words.length;i++){
        let a=words[i].toLowerCase()
        let row=''
        if(firstrow.includes(a[0])){
            row=firstrow
        }else if(secondrow.includes(a[0])){
            row=secondrow
        }else{
            row=thirdrow
        }
        let somerow=true
        for(let j=0;j<a.length;j++){
            if(!row.includes(a[j])){
                somerow=false
                break
            }
        }
        if(somerow){
            arr.push(words[i])
        }
    }
    return arr
};
