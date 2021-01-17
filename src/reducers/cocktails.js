// eslint-disable-next-line
export default (cocktails = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...cocktails, action.payload];
    case "FETCH_ALL":
      return action.payload;
    default:
      return cocktails;
  }
};
