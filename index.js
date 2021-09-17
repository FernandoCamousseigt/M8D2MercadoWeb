//npm install

//si no hay package entonces se debe instalar con lo siguientes comandos:
//npm install express
//npm install --save express-handlebars
//npm install --save jquery
//npm install --save bootstrap

// simbologia a recordar: el > es para importar componente

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const fs = require('fs');

//server
app.listen(3000, () => {
    console.log('servidor corriendo en puerto 3000. Escribe en browser http://localhost:3000/')
  });
  

app.engine("handlebars",exphbs({layoutsDir: __dirname + "/views", partialsDir: __dirname + "/views/components/",})); //engine para configurar el motor de plantilla. .:vistas estarán en views
app.set("view engine", "handlebars");  //para integrar handlebars como motor de plantillas
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/img", express.static(__dirname + "/img"));  //ruta de imagenes


//res render
app.get("/", function (req, res) {
    res.render("Dashboard", {
      layout: "Dashboard",
      productos: [
      "banana",
      "papas",
      "cebollas",
      "lechuga",
      "pimenton",
      "tomate",
      ],
    });
  });

  
     app.get("/:producto", function (req, res) {
    const { producto } = req.params;
      res.render("Dashboard", {
        layout: "Dashboard",
        productos: [
        "banana",
        "papas",
        "cebollas",
        "lechuga",
        "pimenton",
        "tomate",
        ],
        producto: producto,
      });
    });   
