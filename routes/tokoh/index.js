const express = require("express");
const router = express.Router();

router.get("/", require("./controller").getAll);

router.get("/:id", require("./controller").tokohByIdNegara)



module.exports = router;