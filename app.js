const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.method, req.headers, req.url);
  res.setHeader("Content-Type", "text/html");
  res.write("Node Project");
  res.write("add /node or /home or /about to url go to that page");
  res.write("<br>");
  if (req.url == "/home") {
    res.write("Home Page");
  } else if (req.url == "/about") {
    res.write("About Page");
  } else if (req.url == "/node") {
    res.write("welcome to node project");
  }
  res.end();
  // process.exit();
});
server.listen(4000);
