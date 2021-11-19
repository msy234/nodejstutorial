const http = require('http');

const server = http.createServer((req,res)=>{
    res.write('welcome to my first node js web server')
    res.end()
})

server.listen(5000)
// open your browser at 
// http://localhost:5000/
// and u will find it :)