import axios from "axios";

// const url = "http://localhost:3001";
const url = "https://liquor-recipe.herokuapp.com/";

export const fecthCocktails = () => axios.get(url);
export const createCocktails = (newCocktail) => axios.post(url, newCocktail);
export const updateCoktail = (id, updatedCocktail) =>
  axios.patch(`${url}/${id}`, updatedCocktail);
export const deleteCocktail = (id) => axios.delete(`${url}/${id}`);
export const likeCocktail = (id) => axios.patch(`${url}/${id}/likeCocktails`); //likeCocktails is the rout in Routes

// next Actions --->
