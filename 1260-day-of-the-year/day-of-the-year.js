/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let [year,month,day]=date.split('-').map(Number)
     let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
     if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
        months[1]=29
     }
     let totalDay=0
     for(let i=0;i<month-1;i++){
        totalDay+=months[i]
     }
    return totalDay+day

};