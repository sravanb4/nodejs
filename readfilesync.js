var fs=require("fs");


console.log("\n satrt reading line \n ")
//var data=fs.readFileSync(__dirname+"/sample.txt");

var data=fs.readFileSync(__dirname+"/sample.txt","utf8");

//console.log(data.toString());

console.log(data);

console.log("\n done reading line \n")