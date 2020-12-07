let http = require("http");
let fs = require("fs");

let server = http.createServer(function(request, response){
    fs.readFile("./"+request.url, function(error, data){
       if(error){
           let errordata = fs.readFileSync("./404.html");
           // console.log(errordata.toString());
           response.writeHead(404, {"Content-type":"text/html"});
           response.write(errordata.toString());
           response.end();
       }else{
            response.writeHead(200, {"Content-type":"text/html"});
            response.write(data+"");
            response.end();
       }
    })
});

let port = 2525;
let host = "localhost";
let callback = function(error){
            if(error){
                console.log("Error ",error);
            }else{
                console.log("web server is now live on localhost:2525");
            }
        }
server.listen(port, host, callback);
