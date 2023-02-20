const http = require("http")
const myFun=require("./myModule")

http.createServer((request , response)=>{
    response.writeHead(200,{"content-type":"text/html"})
    response.write("<h1>Node js tutorial</h1>")
    response.write("<p>This is our first node js tutorial , we will be get back soon............</p>")
    response.write(myFun("siddhartha"))
    response.end()
}).listen(7800)