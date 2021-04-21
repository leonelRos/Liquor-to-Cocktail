import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SINGLE_COCKTAIL_KEY}${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
          } = data.drinks[0];
          // const ingredients = [
          //   strIngredient1,
          //   strIngredient2,
          //   strIngredient3,
          //   strIngredient4,
          //   strIngredient5,
          // ];
          // const measurements = [
          //   strMeasure1,
          //   strMeasure2,
          //   strMeasure3,
          //   strMeasure4,
          //   strMeasure5,
          // ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strMeasure1,
            strMeasure2,
            strMeasure3,
            strMeasure4,
            strMeasure5,
            strMeasure6,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  // console.log(cocktail["strIngredient1"]);
  const ingredients = [];
  const getIngredients = () => {
    let i = 1;
    while (cocktail["strIngredient" + i]) {
      const measure = cocktail["strMeasure" + i];
      const portion = cocktail["strIngredient" + i];
      ingredients.push(measure + "" + portion);
      i++;
    }
    return ingredients;
  };
  getIngredients();

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="list-title">No cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions } = cocktail;
    return (
      <section className="list-title">
        <Link to="/" className="btn btn-primary">
          Back Home
        </Link>
        <h2 className="list-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name}></img>
          <div className="drink-info">
            <p>
              <span className="drink-data">name: </span>
              {name}
            </p>
            <p>
              <span className="drink-data">category: </span>
              {category}
            </p>
            <p>
              <span className="drink-data">Info: </span>
              {info}
            </p>
            <p>
              <span className="drink-data">Glass: </span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions: </span>
              {instructions}
            </p>
            <div>
              <span className="drink-data">Ingredients: </span>
              {ingredients.map((item, index) => (
                <ul key={index}>
                  <li>{item}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
