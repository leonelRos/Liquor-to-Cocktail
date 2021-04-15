import * as api from "../api";

//fetch single cocktail
export const displayCocktail = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingle(id);
    console.log(data);
    dispatch({ type: "FETCH_ONE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//action creators
export const getCocktails = () => async (dispatch) => {
  try {
    // accesing fetchCocktails from API folder
    //data is the entire object of our created json file
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
    //destructuring the data because we need id and cocktail in order to be modified
    const { data } = await api.updateCoktail(id, cocktail);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

//actions to delete cocktail
export const deleteCocktail = (id) => async (dispatch) => {
  try {
    // accesing deleteCOcktail from API folder
    await api.deleteCocktail(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
//adding the like button
export const likeCocktails = (id) => async (dispatch) => {
  try {
    // accesing likeCocktail from API folder
    const { data } = await api.likeCocktail(id);
    console.log(data);
    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

// Next Reducers  --->
