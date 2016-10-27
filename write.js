var fs=require("fs");



var readable=fs.createReadStream("./sample.txt",
	{encoding:"utf8",highWaterMark:3*1024});


var writable=fs.createWriteStream("./sample1.txt")


readable.on("data",function(chunk){



console.log(chunk.length);

writable.write(chunk);
})