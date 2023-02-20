const http = require("http")
http.createServer((request,response)=>{
    console.log( "-->>",request.url);
}).listen(7720)