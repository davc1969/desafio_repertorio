const fs = require("fs");

const urlHandler = require("url");

const repertorioController = require("./../controllers/controller_repertorio")


const routes = (req, res) => {

    const { url, method } = req;
    const { query:params, pathname} = urlHandler.parse(url, true);


    switch (pathname) {
        case "/" :
            res.writeHead(200, { 'Content-Type': 'text/html' })
            fs.readFile('./public/index.html', 'utf8', (err, data) => {
                res.end(data)
            });
            break;

        case "/cancion" :
            switch (method) {
                case "POST":
                    console.log("incluir nueva cancion");
                    repertorioController.agregarCanciones(req, res);
                    break;

                case "DELETE" :
                    console.log("Borrar Canción");
                    repertorioController.borrarCanciones(req, res)
                    break;

                case "PUT" :
                    console.log("Editar canción");
                    repertorioController.editarCanciones(req, res);
                    break;
            }
            break;

        case "/canciones" :
            console.log("mostrar listado de canciones");
            repertorioController.mostrarCanciones(req, res);
            break;

    }

}


module.exports = routes;