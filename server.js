const express = require('express') ;
const fs = require('fs') ;

const v = require('./verif.js');

const app = express();
app.use('/style',express.static(__dirname+'/style'))

const PORT = 6300 ;

app.get('/',v,(req,res)=>{
    fs.readFile('./home.html','utf8',(err,data)=>{
        err?res.end(' NOT FOUND')&&console.error(err) :res.end(data);
    })
})

app.get('/home.html',v,(req,res)=>{
    fs.readFile('./home.html','utf8',(err,data)=>{
        err?res.end(' NOT FOUND')&&console.error(err) :res.end(data);
    })
})

app.get('/ourservices.html',v,(req,res)=>{
    fs.readFile('./ourservices.html','utf8',(err,data)=>{
        err?res.end(' NOT FOUND')&&console.error(err) :res.end(data);
    })
})

app.get('/contactus.html',v,(req,res)=>{
    fs.readFile('./contactus.html','utf8',(err,data)=>{
        err?res.end(' NOT FOUND')&&console.error(err) :res.end(data);
    })
})

app.listen(PORT,(req,res)=>{
    console.log(`server running : port ${PORT}...`)
}) ;