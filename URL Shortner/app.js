import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import crypto from "crypto";

const PORT = 3001;
const dataFile = path.join("data", "links.json");

// Serve static files
const serveFile = async (res, filePath, contentType) => {
  try {
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("404 Not Found");
  }
};

// Load links
const loadLinks = async () => {
  try {
    const data = await readFile(dataFile, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      await writeFile(dataFile, JSON.stringify({}));
      return {};
    }
    throw err;
  }
};

// Save links
const saveLinks = async (links) => {
  await writeFile(dataFile, JSON.stringify(links, null, 2));
};

// Server
const server = createServer(async (req, res) => {
  // GET routes
  if (req.method === "GET") {
    if (req.url === "/") {
      return serveFile(res, "public/index.html", "text/html");
    }
    if (req.url === "/style.css") {
      return serveFile(res, "public/style.css", "text/css");
    }

    // Redirect short URLs
    const links = await loadLinks();
    const shortCode = req.url.slice(1);
    if (links[shortCode]) {
      res.writeHead(302, { Location: links[shortCode] });
      return res.end();
    }
  }

  // POST /shorten
  if (req.method === "POST" && req.url === "/shorten") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      console.log(body);
      
      const { url, shortCode } = JSON.parse(body);

      if (!url) {
        res.writeHead(400);
        return res.end("URL is required");
      }

      const links = await loadLinks();
      const finalCode = shortCode || crypto.randomBytes(4).toString("hex");

      if (links[finalCode]) {
        res.writeHead(400);
        return res.end("Short code already exists");
      }

      links[finalCode] = url;
      await saveLinks(links);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ shortCode: finalCode }));
    });

    return;
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
