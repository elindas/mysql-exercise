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
                        message: "Add new negara is successfully",
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
            const { id } = req.params;

            connection.query(
                "UPDATE negara SET ? WHERE id=?",
                [req.body, id],
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
    }
};
