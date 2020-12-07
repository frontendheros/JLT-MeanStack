const fs = require("fs");

// fs.writeFileSync("temp.txt","Welcome to your life","utf-8");
// fs.appendFileSync("temp.txt","\nthere's no turning back");
let existingText = fs.readFileSync("temp.txt").toString();
fs.writeFileSync("temp.txt","Welcome to your life \n"+existingText,"utf-8");
console.log("file updated");