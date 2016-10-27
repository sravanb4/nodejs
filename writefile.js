var fs=require("fs");


console.log("\n satrt writing line \n ")


fs.writeFile(__dirname + "/sample1.txt", "hello ");
	// body...

console.log("\n done writing line \n")