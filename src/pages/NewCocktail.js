import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { getCocktails } from "../actions/cocktails";
import { useDispatch } from "react-redux";
import AddForm from "../components/form/AddForm";
import Cocktails from "../cocktails/Cocktails";
import useStyles from "./NewCocktailstyle";

const NewCocktail = () => {
  const [currentId, setCurrentId] = useState(null);

  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCocktails());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid
            className={styles.mainContainer}
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Cocktails setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <AddForm currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default NewCocktail;
