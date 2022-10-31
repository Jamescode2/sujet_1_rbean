function countSpace(str) {
    let som = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            som ++;
        }
    }
    return som;
}

module.exports = countSpace;