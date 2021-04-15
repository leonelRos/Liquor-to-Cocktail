import React, { useEffect } from "react";
import { displayCocktail } from "../actions/cocktails";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CocktailDetail = () => {
  const cocktail = useSelector((state) => state.cocktail);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  console.log(cocktail);

  const fetchCocktail = () => {
    dispatch(displayCocktail(id));
  };
  useEffect(() => {
    if (id && id !== "") fetchCocktail();
  }, [id]);

  return <div>cocktail Detail</div>;
};

export default CocktailDetail;
