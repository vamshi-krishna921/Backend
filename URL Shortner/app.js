import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import crypto from "crypto";

const PORT = 3001;
const dataFile = path.join("data", "links.json");

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

// Loading links
const loadLinks = async () => {
  try {
    const data = await readFile(dataFile, "utf-8");
    return json.parse(data);
  } catch (error) {
    // Error no entry (file not created or missed) we create a file
    if (error.code === "ENOENT") {
      await writeFile(dataFile, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};

// Saving links
const saveLinks = async (links) => {
  await writeFile(dataFile, JSON.stringify(links));
};

// Creating server
const server = createServer(async (req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      return serverPath(res, path.join("public", "index.html"), "text/html");
    }
    if (req.url === "/style.css") {
      return serverPath(res, path.join("public", "style.css"), "text/css");
    }
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 page not found");
});

if (req.method === "POST" && req.url === "/shorten") {
  // Get the links data
  const links = await loadLinks();
  const data = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", async () => {
    console.log(body);
    const { url, shortCode } = JSON.parse(body);
    if (!url) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      return res.end("URL is required.");
    }
  });
}

//Final short code
const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

if (links[finalShortCode]) {
  res.writeHead(400, { "Content-Type": "text/plain" });
  return res.end("Short code already exists.");
}
lins[finalShortCode] = url;
await saveLinks(links);

res.writeHead(200, {"Content-Type": "application/json"});
res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));

// Running server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
