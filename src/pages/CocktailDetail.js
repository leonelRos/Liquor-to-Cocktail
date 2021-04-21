import React, { useEffect } from "react";
import { displayCocktail } from "../actions/cocktails";
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CocktailDetail = () => {
  // const [newCocktail, setNewCocktail] = useState(null);

  // const cocktail = useSelector((state) => state.cocktail);
  const dispatch = useDispatch();
  const { id } = useParams();
  const cocktail = useSelector((state) =>
    id ? state.cocktails.find((c) => c._id === id) : null
  );
  console.log(id);
  console.log(cocktail);

  // const fetchCocktail = () => {
  //   dispatch(displayCocktail(id));
  // };
  // useEffect(() => {
  //   if (id && id !== "") fetchCocktail();
  // }, [id]);
  const fetchCocktail = () => {
    if (!cocktail || id === "") return;
  };
  useEffect(() => {
    dispatch(displayCocktail(id));
    fetchCocktail();
  }, [dispatch, id]);

  if (!cocktail) {
    return <CircularProgress />;
  }
  const {
    title,
    type_of_drink,
    glass,
    likeCount,
    selectedFiles,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6,
  } = cocktail;

  return (
    <div>
      <h1 className="list-title">{title}</h1>
      <div className="drink">
        <img className="img-detail" src={selectedFiles} alt="cocktail" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Type of Drink: </span>
            {type_of_drink}
          </p>
          <p>
            <span className="drink-data">Glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Likes: </span>
            {likeCount}
          </p>
          <p>
            <span className="drink-data">Ingredients: </span>
          </p>
          <h2>
            <li>{ingredient1}</li>
          </h2>
          <h2>
            <li>{ingredient2}</li>
          </h2>
          <h2>
            <li>{ingredient3}</li>
          </h2>
          <h2>
            <li>{ingredient4}</li>
          </h2>
          <h2>
            <li>{ingredient5}</li>
          </h2>
          <h2>
            <li>{ingredient6}</li>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;
