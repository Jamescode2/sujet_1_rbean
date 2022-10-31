function insertDouble(str) {
    let mot = '';
    for (let i = 0; i < str.length; i++) {
        mot += str.charAt(i);
        switch (str.charAt(i)) {
            case 'n':
                mot += str.charAt(i);
                break;
            case 's':
                mot += str.charAt(i);
                break;
            case 'p':
                mot += str.charAt(i);
                break;
            case 'l':
                mot += str.charAt(i);
                break;
        }
    }
    console.log(mot);
}

module.exports = insertDouble;