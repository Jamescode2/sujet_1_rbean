function calculator(a, b, c) {
    var result = 0;
    switch (c) {
        case "+":
            result = a + b;
            console.log(`The result of ${a} ${c} ${b} = ${result}`);
            break;
        case "-":
            result = a - b;
            console.log(`The result of ${a} ${c} ${b} = ${result}`);
            break;
        case "*":
            result = a * b;
            console.log(`The result of ${a} ${c} ${b} = ${result}`);
            break;
        case "/":
            result = a / b;
            console.log(`The result of ${a} ${c} ${b} = ${result}`);
            break;
        default:
            console.log("veuillez taper l'une des opérations suivantes : '+', '-', '*' ou '/' !");
            break;
    }
}

module.exports = calculator;