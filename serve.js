var http=require("http");

var server=http.createServer(function (request,response) {
	// body...
	response.writeHead(200,{"content-Type":"text/palin"});
	response.end("hello ssravan!!!");
})/*.listen(1234);
*/
server.listen(2341);

console.log("server is running at port 2341");