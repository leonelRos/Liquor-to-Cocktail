const express = require("express");
const router = express.Router();
const cocktailsCtrl = require("../controllers/cocktails");

router.get("/", cocktailsCtrl.cocktailIndex);
router.post("/", cocktailsCtrl.create);
router.patch("/:id", cocktailsCtrl.update);
router.delete("/:id", cocktailsCtrl.delete);
router.patch("/:id/likeCocktails", cocktailsCtrl.likeCocktail);

module.exports = router;
