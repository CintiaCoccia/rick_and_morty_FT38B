const express = require('express');
const morgan = require('morgan')
const router = require('./routes/index')
const PORT = 3001;

const server = express();

server.use(morgan("tiny"));

// middleware para parsear json en body
server.use(express.json());

// middleware para agrear headers en la respuesta
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
})

// middleware para agregar rutas
server.use("/rickandmorty", router);

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});


// const http = require("http");
// const PORT = 3001;
// // const characters = require("./utils/data");
// import getCharById from "./controllers/getCharById";

// /*
//     http://localhost:3001/rickandmorty/character/3
//     [.., rickandmorty, character, 3]
// */

// http.createServer(function(req, res) {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("rickandmorty/character")) {
//         const id = req.url.split("/").pop();
//         getCharById(res, id)
//     } else {
//         res.end()
//     }

// }).listen(PORT, "localhost")

// // if(req.url.includes("rickandmorty/character")){
// // const id = req.url.split("/").pop();
// // const character = characters.filter(char => char.id === Number(id))
// //     res.writeHead(200, {"content-type":"application-json"})
// //     res.end(JSON.stringify(character[0]))
// // }

