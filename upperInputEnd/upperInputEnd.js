function upperInputEnd(str) {
    console.log(str.slice(0, -1) + str.charAt(str.length - 1).toUpperCase());
}

module.exports = upperInputEnd;