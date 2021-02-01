// eslint-disable-next-line
export default (cocktails = [], action) => {
  switch (action.type) {
    case "DELETE":
      return cocktails.filter((cocktail) => cocktail._id !== action.payload);
    //like and update are pretty similar action
    case "LIKE":
    case "UPDATE":
      return cocktails.map((cocktail) =>
        cocktail._id === action.payload._id ? action.payload : cocktail
      );
    case "CREATE":
      return [...cocktails, action.payload];
    case "FETCH_ALL":
      return action.payload;
    default:
      return cocktails;
  }
};
