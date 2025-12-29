const http = require("http");

//* Web server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("This is my first page response. Is the changes are responding");
    res.end();
  } else if (req.url === "/page1") {
    // res.setHeader("Content-Type", "text/plain")
    res.setHeader("Content-Type", "text/html")
    res.write("Page 1 response.");
    res.end();
  }
});

//* Create a port
const PORT = 4000;
server.listen(PORT, () => {
  console.log("Server 4000 started 🌐");
});
