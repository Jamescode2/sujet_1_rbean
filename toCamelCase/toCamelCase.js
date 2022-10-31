function toCamelCase(str) {
    let camelCase = '';

    for (let i = 0; i < str.split('_').length; i++) {
        if (i == 0) {
            camelCase = str.split('_')[i].charAt(0) + str.split('_')[i].substring(1).toLowerCase();
        } else {
            camelCase += str.split('_')[i].charAt(0).toUpperCase() + str.split('_')[i].substring(1).toLowerCase();
        }
    }
    return camelCase;
}

module.exports = toCamelCase;