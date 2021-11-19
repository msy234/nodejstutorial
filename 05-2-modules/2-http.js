const http = require('http');   
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('welcome to home page')
    }
    if(req.url === '/about'){
        res.end('About us')
    }
    res.end(`
        <h1>oops !</h1>
        <p>we could not find the page that you looking for</p>
        <a href="/">back to home page</a>
    `)
})

server.listen(5000)