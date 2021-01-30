const mongoose = require("mongoose");
const Cocktail = require("../models/cocktailSchema");

//fetching all cocktails
const cocktailIndex = async (req, res) => {
  try {
    const cocktails = await Cocktail.find();
    res.status(200).json(cocktails);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//create new cocktails
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

//update current cocktail base on their ID
const update = async (req, res) => {
  const { id: _id } = req.params;
  const cocktail = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Not post with the ID");

  const updateCocktail = await Cocktail.findByIdAndUpdate(_id, cocktail, {
    new: true,
  });
  res.json(updateCocktail);
};

module.exports = {
  cocktailIndex,
  create,
  update,
};
