/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    let res=[]
    for(let i=0;i<queries.length;i++){
        for(let j=0;j<dictionary.length;j++){
            let q=0
            for(let k=0;k<queries[i].length;k++){
                if(queries[i][k] !== dictionary[j][k]){
                    q++
                    if(q>2) break
                }
            }
            if(q<=2){
                res.push(queries[i])
                break
            }
        }
    }
    return res
};