var EventEmitter=require("events").EventEmitter;

var emitter=new EventEmitter();


emitter.on("click",function(msg){
	console.log(msg);
})

emitter.emit("click","I m swimming");