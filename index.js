const express = require("express")

const server = express()
server.listen(3000)

server.get('/', function(req,res){
    return res.json({curso:"nodeJS"})
})