let http = require("http");
let server = http.createServer(function(request, response){
    response.writeHead(200, {
        "Content-Type" : "text/html"
    });
    response.write("<h1> Welcome to your life </h1>");
    response.end();
});
server.listen(1010, "localhost", function(error){
    if(error){
        console.log("Error : ", error);
    }else{
        console.log("server is now created on localhost:1010");
    }
})