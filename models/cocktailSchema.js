const mongoose = require("mongoose");

const cocktailSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    type_of_drink: {
      type: String,

      unique: true,
    },
    glass: {
      type: String,
    },
    tags: [String],
    selectedFiles: String,
    likeCount: {
      type: Number,
      default: 0,
    },
    ingredient1: { type: String },
    ingredient2: { type: String },
    ingredient3: { type: String },
    ingredient4: { type: String },
    ingredient5: { type: String },
    ingredient6: { type: String },
    ingredient7: { type: String },
    ingredient8: { type: String },
    ingredient9: { type: String },
    ingredient10: { type: String },
    preparation: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("newCocktails", cocktailSchema);
