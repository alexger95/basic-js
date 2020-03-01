module.exports = function transform(arr) {
    if (arr.length == 0) return [];
    let outarr = [];

    if (!Array.isArray(arr)) throw "Error not array";

    /*double */
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "--double-next") {
            if (typeof(arr[i + 1]) != 'undefined') outarr.push(arr[i + 1]);
        } else if (arr[i] == "--double-prev") {
            if (typeof(arr[i - 1]) != 'undefined') outarr.push(arr[i - 1]);
        } else {
            outarr.push(arr[i]);
        }
    }
    /*clean temp*/
    arr = outarr;
    outarr = [];
    /*delete*/
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "--discard-next") {
            if (typeof(arr[i + 1]) != 'undefined') i++;
        } else if (arr[i] == "--discard-prev") {
            if (typeof(arr[i - 1]) != 'undefined') outarr.pop();
        } else {
            outarr.push(arr[i]);

        }
    }

    return outarr;

};