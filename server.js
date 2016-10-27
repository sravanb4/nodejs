var http=require("http");

var server=http.createServer(function (req,res) {
	// body...
	res.writeHead(200,{"content-Type":"text/plain"});
	res.end("hello sravan!!!");
});

server.listen(8081,function(){
	console.log("server listening port at 8081");
})