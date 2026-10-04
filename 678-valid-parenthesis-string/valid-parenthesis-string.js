/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
       let minOpen = 0
      let maxOpen = 0
      for(let char of s){
        if(char==="("){
            minOpen++
            maxOpen++
        }else if(char===")"){
             minOpen--
            maxOpen--
        }else{
            minOpen--
            maxOpen++
        }
         minOpen = Math.max(0, minOpen);

        if (maxOpen < 0) {
            return false
        }
      }
     return minOpen===0
};