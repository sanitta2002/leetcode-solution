/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
    
    const build = (startRed) => {
        let r = 1;
        let h = 0;
        let R = red, B = blue;

        while (true) {
            const useRed = (r % 2 === 1) === startRed;

            if (useRed) {
                if (R < r) break;
                R -= r;
            } else {
                if (B < r) break;
                B -= r;
            }

            h++;
            r++;
        }
        return h;
    };

    return Math.max(build(true), build(false));
};