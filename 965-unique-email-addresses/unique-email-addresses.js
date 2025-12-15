/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let arr=[]
    for(i=0;i<emails.length;i++){
        let a=emails[i].split('@')
        let first=a[0]
        let second=a[1]
        let b=first.split('.').join('').split('+')
        let res=b[0]+'@'+a[1]
        arr.push(res) 
    }
  
   let uni=new Set(arr)
   return uni.size
};