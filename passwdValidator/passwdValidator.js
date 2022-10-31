function passwdValidator(str) {
    let bool = true;
    let n = 0;
    let minuscule = 0;
    let majuscule = 0;
    let decimal = 0;
    let special = 0;
    var character = '';

    for (let i = 0; i < str.length; i++) {
        character = str.charAt(i);
        n++;
        if (character == '$' || character == '#' || character == '@') {
            special++;
        }
        switch (character) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                decimal++;
                break;
        }
    }

    if (str.match(/[A-Z]/g) !== null) {
        majuscule = str.match(/[A-Z]/g).length;
    }

    if (str.match(/[a-z]/g) !== null) {
        minuscule = str.match(/[a-z]/g).length;
    }

    if (n < 6 || n > 12 || special == 0 || decimal == 0 || majuscule == 0 || minuscule == 0) {
        bool = false;
        return bool;
    }
    return bool;

}

module.exports = passwdValidator;
