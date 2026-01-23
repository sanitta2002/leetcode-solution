/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let h=0
    let totalEnergy=energy.reduce((acc,cur)=>acc+cur,0)
    if(initialEnergy<=totalEnergy){
        h+=totalEnergy+1-initialEnergy
    }
    let curExp=initialExperience
    for(let i=0;i<experience.length;i++){
        if(curExp<=experience[i]){
            let need=experience[i]+1-curExp
            h+=need
            curExp+=need
        }
        curExp+=experience[i]   
    }
    return h
};