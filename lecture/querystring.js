const url = require("url");
const querystring = require("querystring");

const parsedUrl = url.parse(
  "http://www.flexwatch.com/products/ipcamera2/view.asp?code=9302TXMR"
);
const query = querystring.parse(parsedUrl.query);
console.log("querystring.parse():", query);
console.log("querystring.stringify():", querystring.stringify(query));
