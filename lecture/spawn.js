const spawn = require("child_process").spawn;

// var process = spawn("python", ["test.py"]);
var process = spawn("test.o");

process.stdout.on("data", function (data) {
  console.log(data.toString());
});

process.stderr.on("data", function (data) {
  console.error(data.toString());
});
