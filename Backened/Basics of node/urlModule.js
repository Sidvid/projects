const http = require("http")
const url =require("url")
http.createServer((request ,response)=>{
    console.log(request.url); //returns URL
    console.log(request.headers); //return headers
    console.log(request.method); // returns method

}).listen(7700)