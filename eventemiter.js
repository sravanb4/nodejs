var EventEmitter=require("events").EventEmitter;

var emitter=new EventEmitter();

emitter.on("play",function(msg){
	console.log(msg);
})

emitter.emit("play","how are you");