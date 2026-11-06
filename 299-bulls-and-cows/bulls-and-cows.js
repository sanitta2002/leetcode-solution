/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bull=0
    let cow=0
    let count={}
    for(let i=0;i<secret.length;i++){
        if(secret[i]===guess[i]){
            bull++
        }else{
            count[secret[i]]=(count[secret[i]] || 0) + 1
        }
    }

for (let i = 0; i < guess.length; i++) {

        if (secret[i] !== guess[i] && count[guess[i]] > 0) {
            cow++;
            count[guess[i]]--;
        }
    }

    return `${bull}A${cow}B`
};