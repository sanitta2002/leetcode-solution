/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let row = img.length
    let col=img[0].length
    let res=[]
    let n =img.flat().length
    
    for(let i=0;i<row;i++){
        res[i]=[]
        for(let j=0;j<col;j++){
            let sum=0
            let count=0
            for(let x=-1;x<=1;x++){
                for (let y = -1; y <= 1; y++){
                    let newrow=i+x
                    let newcol=j+y
                    if(newrow>=0 && newrow<row && newcol >=0 && newcol<col){
                        sum+=img[newrow][newcol]
                        count++
                    }
                }
            }
            res[i][j]=Math.floor(sum/count)
        }
    }
    return res

    

};