const event = require("events").EventEmitter;
let evt = new event();
process.nextTick(function(){
    evt.emit("vjevent");
});
evt.addListener("vjevent", function(){
    console.log("VJ Event Happened");
});
/*
setTimeout(function(){
    evt.emit("vjevent");
}, 4000)
*/
console.log("last line of file");