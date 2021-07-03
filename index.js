const express = require("express")

const server = express()
server.listen(3000)

// queryParams = url?param1=teste&param2=teste2
//RouteParams  = curso/2             2 seria o RouteParam
//Request Body = {nome="victor" , teste:}
server.get('/curso/:id', function(req,res){
    // http://localhost:3000/curso/4?name=victor
    console.log(req.query.name) // victor
    console.log(req.params.id)//4
    return res.json({curso:"nodeJS"})
})