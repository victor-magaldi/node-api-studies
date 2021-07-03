const express = require("express")

const server = express()
server.listen(3000)

// queryParams = url?param1=teste&param2=teste2
//RouteParams  = curso/2             2 seria o RouteParam
//Request Body = {nome="victor" , teste:}

const cursos = ["nodejs", "javasctipt","react"]

server.get('/curso/:index', function(req,res){
    // http://localhost:3000/curso/4?name=victor
    console.log(req.query.name) // victor
    console.log(req.params.index)//4

    const {index} = req.params
    
    return res.json({curso: cursos[index]})
})