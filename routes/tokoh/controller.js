const{connection}=require("../../config")

module.exports = {
    getAll: (req, res) => {
        try {
            connection.query(
                `SELECT tokoh.id, tokoh.name, tokoh.description, negara.country, negara.capital FROM tokoh JOIN negara ON tokoh.idnegara=negara.idnegara`,
                (error, results, fields) => {
                    if (error) {
                        res.status(500).send({
                            message: `there is something problem: ${error.sqlMessage}`
                        });
                    } else {
                        res.status(200).send({
                            message: "Semua data tokoh",
                            data: results
                        });
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    },
    addData: (req, res) => {
        try {
            connection.query("INSERT INTO negara SET ?", req.body, function(
                error,
                results,
                fields
            ) {
                if (error) {
                    res.status(500).send({
                        message: `there is something problem: ${error.sqlMessage}`
                    });
                } else {
                    res.status(200).send({
                        message: "Add new negara",
                        data: results
                    });
                }
            });
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
                            message: "Jumlah tokoh di setiap negara",
                            data: results
                        });
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    },
    
    getById: (req, res) => {
        try {
            connection.query(
                `SELECT * FROM tokoh JOIN negara ON tokoh.idnegara=negara.idnegara WHERE tokoh.id=${req.params.id}`,
                (error, results, fields) => {
                    if (error) {
                        res.status(500).send({
                            message: `there is something problem: ${error.sqlMessage}`
                        });
                    } else {
                        res.status(200).send({
                            message: "Semua data tokoh",
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
