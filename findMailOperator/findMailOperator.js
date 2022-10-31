function findMailOperator(str) {
    // str = str.slice(str.search(/[@]/) + 1, str.lastIndexOf('.'));
    str = str.slice(str.search(/[@]/) + 1, str.length);
    str = str.slice(0, str.search(/[.]/));
    console.log(str);
}

module.exports = findMailOperator;