let express = require("express");
let app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/01-modules.html");
});

app.listen(3030);
console.log("server is now running on localhost:3030")