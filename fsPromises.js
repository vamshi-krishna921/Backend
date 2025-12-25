const { log } = require("console");
const fs = require("fs");
const path = require("path");
const fileName = "fsProm.txt";
const filePath = path.join(__dirname, fileName);
const dirName = __dirname;
//* Reading into directory

// fs.promises
//   .readdir(dirName)
//   .then((data) => log("Success : ", data))
//   .catch((err) => log(err));

//* Writing into file
// fs.promises
//   .writeFile(filePath, "The file is created.")
//   .then((data) => log(data))
//   .catch((err) => log(err));

//* Reading from file
// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => log(data))
//   .catch((err) => log(err));

//* Append file
// fs.promises.appendFile(filePath, " The text is added at end.")
//   .then(log("success"))
//   .catch((err) => log(err));

//* Delete file
fs.promises.unlink(filePath);
