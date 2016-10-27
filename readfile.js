var fs=require("fs");


console.log("\n satrt reading line \n ")


fs.readFile(__dirname + "/sample.txt", function (err,data) {
	// body...
	console.log(data.toString());
})



console.log("\n done reading line \n")