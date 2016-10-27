var buffer=new Buffer("hello");
console.log(buffer);

console.log(buffer.toString());

//console.log(buffer.toJSON());

//console.log(buffer[1]);


//it will replace with he to po and print as pollo
/*buffer.write("po");

console.log(buffer.toString());*/

buffer.write("poland");
console.log(buffer.toString());