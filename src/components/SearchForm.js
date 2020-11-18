import React from "react";
import { useGlobalContext } from "../context";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Search your favorite Cocktail </label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          ></input>
        </div>
      </form>
    </section>
  );
}
