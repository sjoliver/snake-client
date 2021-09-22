const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  // logs connection message when connection is established
  // sends message to server when connection is established
  conn.on("connect", () => {
    console.log("Connected as fuck");
    conn.write("Name: SJO");
    // setTimeout(() => {conn.write("Move: up");}, 1000);
  });

  return conn;
};

module.exports = {
  connect
};