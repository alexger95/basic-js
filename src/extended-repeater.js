module.exports = function repeater(str, options) {
    if (options.repeatTimes == 0) return str;


    // /*repeatTimes*/
    // let repeatTimes = options.repeatTimes;
    // /*separator*/
    if (typeof(options.separator) == 'undefined') {
        options.separator = "+";
    }
    // }
    // /*addition*/
    // if (typeof(options.addition) == 'undefined') {
    //     let addition = "";
    // } else {
    //     let addition = options.addition;
    // }
    // /*additionRepeatTimes*/
    // if (typeof(options.additionRepeatTimes) == 'undefined') {
    //     let additionRepeatTimes = 0;
    // } else {
    //     let additionRepeatTimes = options.additionRepeatTimes;
    // }
    // /*additionSeparator*/
    // if (typeof(options.additionSeparator) == 'undefined') {
    //     let additionSeparator = "|";
    // } else {
    //     let additionSeparator = options.additionSeparator;
    // }

    function createstring(str = "", separator = "", repeatTimes = 0) {
        let finalstr = str;
        for (let i = 0; i < repeatTimes - 1; i++) {
            finalstr = finalstr + separator + str;
        }
        return finalstr;
    }
    let temp = createstring(options.addition, options.additionSeparator, options.additionRepeatTimes);
    return createstring(str + temp, options.separator, options.repeatTimes);
};