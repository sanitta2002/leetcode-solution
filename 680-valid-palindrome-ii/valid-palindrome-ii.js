/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
           return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
    }
    return true;

    function isPalindrome(s, l, r) {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}
};