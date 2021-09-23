// setup interface to handle user input from stdin
const { createConnection } = require("net");

let connection;

const setupInput = function (conn) {
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // conn is the connection object defined in client.js
  connection = conn;

  // anon callback function is the handleUserInput function
  stdin.on("data", (key) => {
     
    // exits the process when ctrl+c is typed by the user 
    if (key === '\u0003') {
      process.exit();
    }

    // move snake using w, a, s, d keys
    switch (key) {
      case 'w': 
        connection.write("Move: up")
        break;
      case 'a': 
        connection.write("Move: left")
        break;
      case 's': 
        connection.write("Move: down")
        break;
      case 'd': 
        connection.write("Move: right")
        break;
      case 'l':
        connection.write("Say: lol")
        break;
      default: 
      connection.write("Say: no")
    }
  });

  return stdin;
};

module.exports = {
  setupInput
}