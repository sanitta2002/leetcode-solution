/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
   let res=''
   while(columnNumber>0){
    let charCode=((columnNumber-1)%26)+65
    res=String.fromCharCode(charCode)+res
    columnNumber=Math.floor((columnNumber - 1) / 26)
   }
   return res

};