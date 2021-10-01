
const queries = require("./../services/db_pool_services");
const urlHandler = require("url");
const { url } = require("inspector");

const mostrarCanciones = async (req, res) => {
    console.log("Mostrar canciones en controlador");
    sqlQuery = {
        text: "select * from repertorio;",
        values: [],

    };
    res.writeHead(200, { "Content-Type": "application/json" });
    try {
        const response = await queries.dbQuery(sqlQuery);
        console.log("mostrar canciones respond", response);
        res.end(response);
    } catch (error) {
        
    }

};


const agregarCanciones = async (req, res) => {
    console.log("Agregar canciones en controlador");
    let body;
    req.on("data", async (payload) => {
        body = JSON.parse(payload);
        console.log("body", body);

        sqlQuery = {
            text: "insert into repertorio (cancion, artista, tono) values ($1, $2, $3) returning *;",
            values: [body.cancion, body.artista, body.tono],
            rowMode: 'array'
        };
    
        //console.log("query: ", sqlQuery);
        let response;
        try {
            //res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
            response = await queries.dbQuery(sqlQuery);
            response = JSON.stringify(response);
            console.log("Cancion agregada: ", response);

            //res.end((response));
        } catch (error) {
            console.log("Error en agregar canciones: ", error.message);
            response = {
                code: error.code,
                message: error.message
            }
        } finally {

            res.end(response);
        }

    });


};

const editarCanciones = (req, res) => {
    console.log("Editar canciones en controlador");

    let body;
    req.on("data", async (payload) => {
        body = JSON.parse(payload);
        console.log("body", body);
        console.log(req.url);

        sqlQuery = {
            text: "update repertorio set cancion = $2, artista = $3, tono = $4 where id = $1 returning *;",
            values: [body.id, body.cancion, body.artista, body.tono],
            rowMode: 'array'
        };
    
        //console.log("query: ", sqlQuery);
        let response;
        try {
            res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
            response = await queries.dbQuery(sqlQuery);
            response = JSON.stringify(response);
            console.log("Cancion Editada: ", response);

            //res.end((response));
        } catch (error) {
            console.log("Error en editar canciones: ", error.message);
            response = {
                code: error.code,
                message: error.message
            }
        } finally {

            res.end(response);
        }
    });
};

const borrarCanciones = async (req, res) => {

    const params = urlHandler.parse(req.url, true).query;
    console.log("Borrar canciones en controlador");

    sqlQuery = {
        text: "delete from repertorio where id = $1 returning *;",
        values: [params.id],

    };
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    try {
        const response = await queries.dbQuery(sqlQuery);
        console.log("mostrar canciones respond", response);
        res.end(response);
    } catch (error) {
        
    }
};



module.exports = {
    mostrarCanciones,
    agregarCanciones,
    editarCanciones,
    borrarCanciones
}