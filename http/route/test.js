const http = require('http')
const fs = require('fs');
const port = 2002


const launcher = ((req, res) =>{
    switch(req.url){
        case "/":
            fs.readFile(__dirname + "/boy.html", (error, data)=>{
                if(error){
                    console.log(error.message);
                }else{
                    res.setHeader('Content-Type', 'text/html')
                    res.end(data);
                }
            })
            break;
            case "/girl":
            fs.readFile(__dirname + "/girl.html", (error, data)=>{
                if(error){
                    console.log(error.message);
                }else{
                    res.setHeader('Content-Type', 'text/html')
                    res.end(data);
                }
            })
            break;
            case "/dad":
            fs.readFile(__dirname + "/dad.html", (error, data)=>{
                if(error){
                    console.log(error.message);
                }else{
                    res.setHeader('Content-Type', 'text/html')
                    res.end(data);
                }
            })
            break;
            case "/mom":
            fs.readFile(__dirname + "/mom.html", (error, data)=>{
                if(error){
                    console.log(error.message);
                }else{
                    res.setHeader('Content-Type', 'text/html')
                    res.end(data);
                }
            })
            break;
            default:
                res.setHeader('Content-Type', 'text/html')
                res.end("No come here again if you dont have money")

    }
})
const app = http.createServer(launcher);


app.listen(port, ()=>{
    console.log("Your server don dey run oga no disturb my life, check port ---- " + port)
})