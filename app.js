const http = require("http");

var routes = require("./routes.js");

//method 1 in route.js
// const server = http.createServer(routes);

//method 2 and method 3 in route.js
console.log(routes.someCode);
const server = http.createServer(routes.handler);

server.listen(3000);
