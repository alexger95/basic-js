module.exports = function getSeason(date) {

    if (typeof(date) === "undefined") return 'Unable to determine the time of year!';
    if (Object.prototype.toString.call(date) != '[object Date]') throw Error; //deeperFakeDate [object Object]
    let m = date.getMonth();
    if (m >= 11 || m <= 1) {
        return "winter"
    }
    if (m >= 2 & m <= 4) {
        return "spring"
    }
    if (m >= 5 & m <= 7) {
        return "summer"
    }
    if (m >= 8 & m <= 10) {
        return "autumn"
    }

};