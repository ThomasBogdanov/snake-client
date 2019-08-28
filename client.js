const net = require('net');

const x = {
    connect: () => {
        const conn = net.createConnection({ 
            host: '192.168.88.151',
            port: 50541
          });
          // interpret incoming data as text
          conn.setEncoding('utf8');

          conn.on('data', (data) => {
            console.log('Successfully connected to game server');
          });

          conn.on('connect', () => {
            conn.write('Name: Tom');
          });

        //   conn.on('connect', () => {
        //     conn.write('Move: up');
        //   });
        
          return conn;
        }  
    }

const { connect }  = x;

module.exports = { connect }