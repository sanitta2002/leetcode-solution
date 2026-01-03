/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    function convert(date){
    let days = [31,28,31,30,31,30,31,31,30,31,30,31]
    let [month,day]=date.split('-').map(Number)
    let total=0
    for(let i=0;i<month-1;i++){
        total+=days[i]
    }
    return total+day
  }
    let aStart = convert(arriveAlice)
    let aEnd   = convert(leaveAlice)
    let bStart = convert(arriveBob)
    let bEnd   = convert(leaveBob)
    
    let start = Math.max(aStart,bStart)
    let end = Math.min(aEnd,bEnd)
    
    if(start>end) return 0
    return end-start+1
};