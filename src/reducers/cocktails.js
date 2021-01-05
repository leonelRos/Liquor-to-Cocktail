// eslint-disable-next-line
export default (cocktails = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    default:
      return cocktails;
  }
};
