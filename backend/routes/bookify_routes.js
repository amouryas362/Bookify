const express = require("express");
const router = express.Router();



const {getBook} = require("../controllers/bookcontroller");


router.get("/",getBook);

module.exports = router;