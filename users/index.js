const express = require('express');
const user = require("../constants/index")
const router = express.Router();


router.get("/", require("./get_User"));
router.post("/", require("./add_User"));
router.post("/login", require("./login"));
module.exports = router;