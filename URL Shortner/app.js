import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";

const PORT = 3001;

// Server path
const serverPath = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 page not found");
  }
};

// Creating server
const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return serverPath(
        res,
        path.join("public", "index.html"),
        "text/html"
      );
    }
    if (req.url === "/style.css") {
      return serverPath(
        res,
        path.join("public", "style.css"),
        "text/css"
      );
    }
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 page not found");
});

if (req.method === "POST" && req.url === "/shorten") {
    const data = "";
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on("end", () => {
        console.log(body);
        const {url, shortCode} = JSON.parse(body);

        if (!url) {
            return res.end("URL is required.")
        }
        
    })
}


// Running server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
