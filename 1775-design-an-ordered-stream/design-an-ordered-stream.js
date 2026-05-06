/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = new Array(n + 1);
    this.ptr = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
this.stream[idKey] = value;

    let result = [];
    while (this.ptr < this.stream.length && this.stream[this.ptr]) {
        result.push(this.stream[this.ptr]);
        this.ptr++;
    }

    return result;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */