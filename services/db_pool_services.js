const pool = require("./../db/init").instancePool.getPoolInstance();

const dbQuery = async (queryJSON) => {
    //console.log("entrando en dbQuery");
    return new Promise ( (resolve, reject) => {
        pool.connect( async (error_connection, client, release) => {
            try {
                if (error_connection) {
                    throw new Error(error_connection)
                }
                //console.log("dbquery try");
                //const results = await client.query(queryJSON);
                client.query("SET client_encoding to 'utf-8';" , async function(err, empty_result_to_fix_encoding) {
                const results = await client.query(queryJSON);  // "Real" query goes here.});
                resolve(JSON.stringify(results.rows));
                });
            } catch (error) {
                console.log("error en try de dbquery", error.message);
                reject(error);
            } finally {
                //console.log("llegó al release");
                release();
            }
        })
    })
};

const showQuery = (queryJSON) => {

    console.log("Entrando en showquery");
    
    dbQuery(queryJSON)
    .then ( (results) => {
        //console.log("dbquery results", results);
        return JSON.stringify(results.rows);
    })
    .catch ( (error) => {
        const publicError = {
            code: error.code,
            message: error.message
        };
        return JSON.stringify(publicError);
    })
};


module.exports = {
    showQuery,
    dbQuery
};
