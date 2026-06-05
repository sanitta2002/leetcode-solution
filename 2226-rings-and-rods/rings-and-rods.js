/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let rods = Array(10).fill("");

    for (let i = 0; i < rings.length; i += 2) {
        let color = rings[i];
        let rod = rings[i + 1];

        if (!rods[rod].includes(color)) {
            rods[rod] += color;
        }
    }

    let count = 0;

    for (let rod of rods) {
        if (
            rod.includes('R') &&
            rod.includes('G') &&
            rod.includes('B')
        ) {
            count++;
        }
    }

    return count;
};