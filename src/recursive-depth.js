module.exports = class DepthCalculator {


    calculateDepth(arr, count = 0, results = []) {
        count++;
        results.push(count);
        arr.forEach(arrayelement => {
            if (Array.isArray(arrayelement)) {
                this.calculateDepth(arrayelement, count, results);
            }
        });

        return Math.max(...results);
    }
};