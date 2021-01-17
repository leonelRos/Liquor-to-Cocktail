const mongoose = require("mongoose");
const Cocktail = require("../models/cocktailSchema");

const cocktailIndex = async (req, res) => {
  try {
    const cocktails = await Cocktail.find();
    res.status(200).json(cocktails);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const create = async (req, res) => {
  const cocktail = req.body;
  const newCocktail = new Cocktail(cocktail);
  try {
    await newCocktail.save();
    res.status(201).json(newCocktail);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

module.exports = {
  cocktailIndex,
  create,
};
