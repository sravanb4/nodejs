var EventEmitter=require("events").EventEmitter;

var emitter=new EventEmitter();

var fs=require("fs");

var fileName="./sample.txt"


//start reading file

emitter.on("start_reading",function (fileName) {
	

	console.log("start reading a file");

	fs.readFile(fileName,function(err,data){


	if(err){
		emitter.emit("error",err);
	}
	else{


		console.log("done reading a file");
		emitter.emit("print_content",data);
	}
})

});

//print the file name

emitter.on("print_content",function(data){

	console.log(data.toString());

	console.log("done printing the data!!");
emitter.emit("done");


})

//error

emitter.on("error",function(msg){

console.log("oops something went wrong ")
console.log(msg)
})

//done

emitter.on("done",function(){

console.log("done with everthing");

})

emitter.emit("start_reading",fileName)