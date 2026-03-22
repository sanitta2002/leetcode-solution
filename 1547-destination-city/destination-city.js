/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let set =new Set()
    for(let [from, to] of paths){
        set.add(from)
    }
    for(let [from, to] of paths){
        if(!set.has(to)){
            return to
        }
    }

};