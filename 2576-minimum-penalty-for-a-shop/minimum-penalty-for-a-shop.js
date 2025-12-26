/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let totalY = 0;
    for (let c of customers) {
        if (c === 'Y') totalY++;
    }
    let minPenalty = totalY;
    let penalty = totalY;
    let bestHour = 0;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            penalty--;   
        } else {
            penalty++;   
        }

        if (penalty < minPenalty) {
            minPenalty = penalty;
            bestHour = i + 1;
        }
    }

    return bestHour;
};