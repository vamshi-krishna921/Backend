const { log } = require("console");
const fs = require("fs");
const path = require("path");
const fileName = "test.txt";
const fileJoin = path.join(__dirname, fileName)
const writeFile = fs.writeFileSync(fileJoin, "This is file System.");
log(writeFile);
//* Read file data
const readFile = fs.readFileSync(fileJoin, "utf-8");
log(readFile);
//* Append content
const appendContent = fs.appendFileSync(fileJoin, " Appended data.");
log(appendContent);
//* Delete or unlink file
fs.unlinkSync(fileJoin);