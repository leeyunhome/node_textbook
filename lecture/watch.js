const fs = require("fs");

fs.watch("./target_change.txt", (eventType, filename) => {
  console.log(eventType, filename);
});
