import * as api from "../api";

//action creators
export const getCocktails = () => async (dispatch) => {
  try {
    const { data } = await api.fecthCocktails();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//actions to create a new cocktail
export const createCocktails = (cocktail) => async (dispatch) => {
  try {
    const { data } = await api.createCocktails(cocktail);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//actions update a new cocktail
export const updateCocktail = (id, cocktail) => async (dispatch) => {
  try {
    const { data } = await api.updateCoktail(id, cocktail);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Next Reducers  --->
