
let connection;

const handleUserInput = function (key) {
    if (key === '\u0003') {
        process.exit();
    }
    if (key.toLowerCase() === 'w') {
        connection.write("Move: up"); 
    }
    if (key.toLowerCase() === 'a') {
        connection.write("Move: left");
    }
    if (key.toLowerCase() === 's') {
        connection.write("Move: down");
    }
    if (key.toLowerCase() === 'd') {
        connection.write("Move: right");
    }
    if (key.toLowerCase() === 'e') {
        connection.write("Say: Tom > Andrew in snake");
    }
};

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', (key) => {
        handleUserInput(key);
    });
    return stdin;
  }

module.exports = { setupInput };


        //   conn.on('connect', () => {
        //     conn.write('Name: Tom');
        //   });