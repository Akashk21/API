const { createServer } = require("http");
const fs = require("fs");

const server = createServer((req, res) => {
  const data= fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
  const objData = JSON.parse(data);

  if (req.url === "/") {
    res.end("Hello from the home page");
  } else if (req.url === "/contact") {
    res.end("Hello from the contact page");
  } else if (req.url === "/userapi") {
    res.writeHead(200, {"context-type": "application/json"});
    res.end(objData[1].title);

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server listening on port 8000");
});
