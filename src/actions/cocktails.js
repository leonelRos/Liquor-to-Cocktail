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
