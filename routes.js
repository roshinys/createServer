const fs = require("fs");
var msg = undefined;

const routeHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(`${msg}`);
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("close", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("./message.txt", message, (err) => {
        msg = message;

        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

// method1
// module.exports = routeHandler;

//method 2
// module.exports = {
//   handler: routeHandler,
//   someCode: "Hard coded text",
// };

//method 3 can use module.exports or just exports
exports.handler = routeHandler;
exports.someCode = "Hard coded text";
