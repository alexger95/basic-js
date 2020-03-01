module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let drimteamName = [];
    for (let name of members) {
        if (typeof(name) == 'string') {
            name = name.replace(/\s/g, '');
            drimteamName.push(name.split('')[0].toUpperCase());
        }

    }
    return drimteamName.sort().join('').toUpperCase();
};