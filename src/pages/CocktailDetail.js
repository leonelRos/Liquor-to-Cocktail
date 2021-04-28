import React, { useEffect } from "react";
import { displayCocktail } from "../actions/cocktails";
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CocktailDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cocktail = useSelector((state) =>
    id ? state.cocktails.find((c) => c._id === id) : null
  );
  console.log(id);
  console.log(cocktail);

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
    <div className="content list-title">
      <h1>{title}</h1>
      <a href="/newCocktail" className="btn btn-primary">
        Back home
      </a>
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
          <p>
            <li>{ingredient1}</li>
          </p>
          <p>
            <li>{ingredient2}</li>
          </p>
          <p>
            <li>{ingredient3}</li>
          </p>
          <p>
            <li>{ingredient4}</li>
          </p>
          <p>
            <li>{ingredient5}</li>
          </p>
          <p>
            <li>{ingredient6}</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetail;
