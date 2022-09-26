const http = require("http");
// console.log(http);
//http handles request and then respond accordingly
const server = http.createServer((req, res) => {
  console.log("hello");
  console.log(req);
  //   res.send("server started at port 4000");
});
server.listen(4000);
