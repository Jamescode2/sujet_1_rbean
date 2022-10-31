function onlyDigits(str) {
    let test = true;
    for (let i = 0; i < str.length; i++) {
        switch (str.charAt(i)) {
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
            case " ":
                test = true;
                break;
            default:
                test = false;
                return test;
        }
    }
    return test;
}

module.exports = onlyDigits;