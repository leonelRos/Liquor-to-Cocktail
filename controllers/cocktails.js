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

module.exports = {
  cocktailIndex,
};
