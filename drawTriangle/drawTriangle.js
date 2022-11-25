function drawTriangle(int) {
    let triangle = '/|';

    for (let i = 0; i < int; i++) {
        triangle = ' '.repeat(int-i)+'/' + ' '.repeat(i) + '|';
        console.log(triangle);
    }
    
    triangle = '/' + '_'.repeat(int) + '|';
    console.log(triangle);

}

module.exports = drawTriangle;