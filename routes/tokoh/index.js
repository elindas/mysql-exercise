const express = require("express");
const router = express.Router();

router.get("/", require("./controller").getAll);
router.post("/", require("./controller").addData);

router.get("/negara/:id", require("./controller").tokohByIdNegara)

router.get("/:id", require("./controller").getById)




module.exports = router;