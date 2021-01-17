import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Cocktail from "./cocktail/Cocktail";

const Cocktails = ({ setCurrentId }) => {
  const cocktails = useSelector((state) => state.cocktails);

  console.log(cocktails);

  return !cocktails.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {cocktails.map((cocktail) => {
        return (
          <Grid key={cocktail._id} xs={12} sm={6} item>
            {/* passing both setCurrentId and cocktail from the map method */}
            <Cocktail cocktail={cocktail} setCurrentId={setCurrentId} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Cocktails;
