const { connect } = require('./client');
const stdin = process.stdin;

console.log('Connecting ...');

// stdin.on('data', (key) => {
//     console.log(key);
//     if (key === '\u0003') {
//         process.exit();
//     }
// });

const handleUserInput = function (key) {
    console.log(key);
    if (key === '\u0003') {
        process.exit();
    }
};



/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.on('data', handleUserInput);
    stdin.resume();
    return stdin;
  }



connect();
setupInput();


// stdin.on('data', (key) => {
//     if (key === '\u0003') {
//         process.exit();