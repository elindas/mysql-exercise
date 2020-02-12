const{connection}=require("../../config")

module.exports = {
    getAll: (req, res) => {
        try {
            connection.query(
                `SELECT * from tokoh JOIN negara ON tokoh.idnegara=negara.idnegara`,
                (error, results, fields) => {
                    if (error) {
                        res.status(500).send({
                            message: `there is something problem: ${error.sqlMessage}`
                        });
                    } else {
                        res.status(200).send({
                            message: "Show all data tokoh",
                            data: results
                        });
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    },
    
    tokohByIdNegara: (req, res) => {
        try {
            connection.query(
                `SELECT COUNT(name) FROM tokoh JOIN negara ON tokoh.idnegara=negara.idnegara WHERE tokoh.idnegara=${req.params.id}`,
                (error, results, fields) => {
                    if (error) {
                        res.status(500).send({
                            message: `there is something problem: ${error.sqlMessage}`
                        });
                    } else {
                        res.status(200).send({
                            message: "Show all data tokoh",
                            data: results
                        });
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    },
    

   
};
