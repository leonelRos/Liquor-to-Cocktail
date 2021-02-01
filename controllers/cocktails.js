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
    return res.status(404).send("Not Cocktail with the ID");

  const updateCocktail = await Cocktail.findByIdAndUpdate(_id, cocktail, {
    new: true,
  });
  res.json(updateCocktail);
};

//delete cocktail method
const deleteCocktail = async (req, res) => {
  //we need the ID
  const { id } = req.params;
  //need to check if ID exists in our server side
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("not cocktails with ID");

  //Delete functionality
  await Cocktail.findByIdAndRemove(id);
  res.json({ message: "cocktail delete succesfully" });
};

module.exports = {
  cocktailIndex,
  create,
  update,
  delete: deleteCocktail,
};
