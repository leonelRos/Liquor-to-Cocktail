import axios from "axios";

const url = "http://localhost:3001";

export const fecthCocktails = () => axios.get(url);
export const createCocktails = (newCocktail) => axios.post(url, newCocktail);
export const updateCoktail = (id, updatedCocktail) =>
  axios.patch(`${url}/${id}`, updatedCocktail);
export const deleteCocktail = (id) => axios.delete(`${url}/${id}`);

// next Actions --->
