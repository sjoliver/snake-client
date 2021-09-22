// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // anon fn (callback) is the handleUserInput fn
  // exits the process when ctrl+c is inputted by the user 
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  return stdin;
};

module.exports = {
  setupInput
}