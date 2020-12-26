const express = require("express");
const router = express.Router();
const cocktailsCtrl = require("../controllers/cocktails");

router.get("/", cocktailsCtrl.indexPost);

module.exports = router;
