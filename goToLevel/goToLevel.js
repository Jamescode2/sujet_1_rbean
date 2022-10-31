function goToLevel(a,b) {
    if ( (a >=0 && a<=19) && (b >=0 && b<=19)) {
        return b-a;
    } else {
        return 0;
    }
}

module.exports = goToLevel;
