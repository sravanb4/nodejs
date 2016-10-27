var fs=require("fs");

//var readable=fs.createReadStream("./sample.txt","utf8");

var readable=fs.createReadStream("./sample.txt",
	{encoding:"utf8",highWaterMark:3*1024});

readable.on("data",function(chunk){

//console.log(chunk.toString());


console.log(chunk.length);
})