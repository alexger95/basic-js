// let matrix = [
//     ['##', 'dd', '00'],
//     ['^^', '..', 'ss'],
//     ['AA', 'dd', 'Oo'],
// ];
module.exports = function countCats(matrix) {
    let catsCount = 0;
    for (let value of matrix) {
        for (let subValue of value) {
            if (subValue == '^^') {
                catsCount++;
            }
        }
    }
    return catsCount;
};