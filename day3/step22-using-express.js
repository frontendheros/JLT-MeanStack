let express = require("express");
let app = express();
//-------------------------------------
app.use(express.static(__dirname));
app.use("/assets",express.static(__dirname+"/public"));
//-------------------------------------
// request, response, next
app.get("/", function(req, res){
    res.send();
})
//-------------------------------------
app.listen(3000);
console.log("webserver is now live on localhost:3000")