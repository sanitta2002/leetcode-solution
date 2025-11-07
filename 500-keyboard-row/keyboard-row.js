/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let firstRow ='qwertyuiop'
    let secRow  = 'asdfghjkl'
    let thirdRow = 'zxcvbnm'
    let arr=[]

    for(i=0;i<words.length;i++){
        let a=words[i].toLowerCase()
        let row=''
        if(firstRow.includes(a[0])){
            row=firstRow
        }else if(secRow.includes(a[0])){
            row=secRow
        }else{
            row=thirdRow
        }
       
       let sameRow=true
       for(j=0;j<a.length;j++){
          if(!row.includes(a[j])){
            sameRow=false
            break
          }
       }
       if(sameRow){
        arr.push(words[i])
       }
    }
    return arr
};