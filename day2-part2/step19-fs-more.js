const fs = require("fs");

let errorHandler = function(error){
    console.log("Error ", error);
}
// fs.mkdirSync("tempfolder");

if(fs.existsSync("./tempfolder")){
    fs.writeFile("./tempfolder/data.txt", "Welcome to your life", function(error){
        if(error){
            errorHandler(error);
        }else{
            console.log("file updated")
        }
    })
    }else{
        fs.mkdir("tempfolder", function(error){
            if(error){
                errorHandler(error);
            }else{
                fs.writeFile("./tempfolder/data.txt", "Welcome to your life", function(error){
                    if(error){
                        errorHandler(error);
                    }else{
                        console.log("file updated")
                    }
                })
                // console.log("folder created");
            }
        })
    };