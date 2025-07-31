/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    let str=num.toString().split('')
  
    let odd=str.filter(e=>e%2!==0).sort((a,b)=>b-a)
    let even=str.filter(e=>e%2===0).sort((a,b)=>b-a)
      let result=str.map(e=>{
        return e%2===0 ? even.shift() : odd.shift()
      })
      return parseInt(result.join(''))
}