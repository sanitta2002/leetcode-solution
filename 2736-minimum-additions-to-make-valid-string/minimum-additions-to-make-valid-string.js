/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
    let i=0
    let count=0
    while(i<word.length){
        if(word[i]==='a'){
            i++
        }else{
           count++ 
        }
        if(i<word.length && word[i]==='b'){
            i++
        }else{
            count++
        }
        if(i<word.length && word[i]==='c'){
            i++
        }else{
            count++
        }
    }
    return count
};