module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let stespsCount = 0;
    let timeNead = 0;
    stespsCount = Math.pow(2, disksNumber) - 1;
    timeNead = stespsCount / (turnsSpeed / 3600);
    return {
        turns: stespsCount,
        seconds: timeNead
    };
}