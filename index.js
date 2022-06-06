const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{
//     //   console.log(req.headers)
//     //   console.log(res)
//     //   console.log(req.headers)
     
//     // res.write("<h1>PING from server</h1>")
//     res.write("<h1>This is a Response</h1>")
//     res.end();
// })
if(req.url=='/home'){
    const data = fs.readFileSync(path.join(__dirname,'/public/home.html'))
    res.write(data)
}
else if (req.url=='/about')
{
        const data = fs.readFileSync(path.join(__dirname,'/public/about.html'))
     res.write(data)

    }
    res.end();

}
)


server.listen(8080);