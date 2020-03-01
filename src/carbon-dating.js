const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


module.exports = function dateSample(sampleActivity) {
    let coefficient = 0;
    let reactionSpead = 0;
    let timeAgo = false;
    if (typeof(sampleActivity) != "string") {
        return false;
    }
    sampleActivity = parseFloat(sampleActivity);
    if (sampleActivity > 0 & sampleActivity < 15) {
        sampleActivity = parseFloat(sampleActivity);
        coefficient = 15 / sampleActivity;
        reactionSpead = 0.693 / HALF_LIFE_PERIOD;
        timeAgo = Math.log(coefficient) / reactionSpead;
        return Math.ceil(timeAgo);
    } else {
        return false;
    }

};