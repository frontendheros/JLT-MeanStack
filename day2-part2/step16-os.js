const os = require("os");

console.error(os.arch());
console.error("TB", os.totalmem() / 1024 / 1024 / 1024);
console.log(os.cpus());

