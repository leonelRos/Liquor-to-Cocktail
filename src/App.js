import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//imporet pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
import CocktailDetail from "./pages/CocktailDetail";
//import components
import Navbar from "./components/Navbar";
import NewCocktail from "./pages/NewCocktail";
import Auth0ProviderWithHistory from "./Auth0Provider";
import "./App.css";

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cocktail/:id">
            <SingleCocktail />
          </Route>
          <Route path="/newCocktails/:id">
            <CocktailDetail />
          </Route>
          <Route path="/newCocktail">
            <NewCocktail />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;
