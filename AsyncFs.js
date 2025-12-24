const fs = require('fs');
const path = require('path')
const fileName = "Asyncfile.txt"
const filePath = path.join(__dirname,fileName)
//* Create and write into file
// fs.writeFile(filePath, "The async file created.",  (err)=>{
//     if(err){
//         console.log(err, "occured.");
//     }else{
//         console.log("File created1"); 
//     }
// })


//* Append data into file
// fs.appendFile(filePath, "Data appended at end.", "utf-8", (err) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Data appended");
//     }
// })

// //* Read data from file
// fs.readFile(filePath, "utf-8", (err,data)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

//* File rename
// fs.rename("Asyncfile.txt", "asyncFile.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File renamed");     
//     }
// })

//* File delete
fs.unlink(filePath, (err)=>{
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted.");
    }
})