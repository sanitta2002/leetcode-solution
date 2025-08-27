/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
   const caps=title.split(' ').map(item=>{
    if(item.length<=2){
        return item.toLowerCase()
    }
    return item[0].toUpperCase()+item.slice(1).toLowerCase();
   }).join(" ")
   return caps
};