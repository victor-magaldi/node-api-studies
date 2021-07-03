const { json } = require("express");
const express = require("express");

const server = express();
server.listen(3000);

// para conseguir enviar um json por POST
server.use(express.json());

// queryParams = url?param1=teste&param2=teste2
//RouteParams  = curso/2             2 seria o RouteParam
//Request Body = {nome="victor" , teste:}

const cursos = ["nodejs", "javasctipt", "react"];

server.get("/cursos/:id", function (req, res) {
  // http://localhost:3000/curso/4?name=victor
  console.log(req.query.name); // victor
  console.log(req.params.id); //4

  const { id } = req.params;

  return res.json({ curso: cursos[id] });
});

server.get("/cursos", function (req, res) {
  return res.json({ cursos: cursos });
});

server.post("/cursos", function (req, res) {
  console.log(req.body);
  const { name } = req.body;
  cursos.push(name);
  return res.json({ cursos: cursos });
});
