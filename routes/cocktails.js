const express = require("express");
const router = express.Router();
const cocktailsCtrl = require("../controllers/cocktails");

router.get("/", cocktailsCtrl.cocktailIndex);
router.post("/", cocktailsCtrl.create);

module.exports = router;
