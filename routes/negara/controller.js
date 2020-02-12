const{connection}=require("../../config")

module.exports = {
    getAll: (req, res) => {
        try {
            connection.query(
                `SELECT * from negara`,
                (error, results, fields) => {
                    if (error) {
                        res.status(500).send({
                            message: `there is something problem: ${error.sqlMessage}`
                        });
                    } else {
                        res.status(200).send({
                            message: "Show all data negara",
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

    updateOne: (req, res) => {
        try {

            connection.query(
                "UPDATE negara SET ? WHERE idnegara=?",
                [req.body, req.params.id],
                function(error, results, fields) {
                    if (error) {
                        res.status(500).send({
                            message: `there is something problem: ${error.sqlMessage}`
                        });
                    } else {
                        res.status(200).send({
                            message: `Update negara with id ${id} is successfully`,
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
                `SELECT * FROM negara WHERE negara.idnegara=${req.params.id}`,
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
    deleteOne: (req, res) => {
        try {
            connection.query(
                `DELETE FROM negara WHERE idnegara=${req.params.id}`,
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
