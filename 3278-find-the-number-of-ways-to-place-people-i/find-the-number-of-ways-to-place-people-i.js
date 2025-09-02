/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    let count=0
    let n=points.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(i===j) continue

            let [x1,y1]=points[i]
            let [x2,y2]=points[j]

            if(x1<=x2 && y1>=y2){
                let vaild=true

                for(let k=0;k<n;k++){
                    if(k===i || k===j) continue

                    let [x,y]=points[k]

                    if(x1<=x && x<=x2 && y2<=y && y<=y1){
                        vaild=false
                        break
                    }
                }
                if(vaild){
                    count++
                }
            }
        }
    }
    return count
};