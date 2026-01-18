import readline, { createInterface } from "readline";
import fs from "fs";
import { error, log } from "console";
const rdln = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreate = () => {
  rdln.question("Enter the file name to create : ", (fileName) => {
    rdln.question("Enter the content to add : ", (data) => {
      fs.writeFile(fileName, data, "utf-8", (err) => {
        if (err) error(err);
        else {
            log(`${fileName}`, "created.");
            fs.readFile(fileName,"utf-8", (err,data) => {
                if (err) {
                    log(err);
                } else {
                    log(data);
                }
            })
        }
        rdln.close();
      });
    });
  });
};

fileCreate();
