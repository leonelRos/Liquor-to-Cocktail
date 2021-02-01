import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { createCocktails, updateCocktail } from "../../actions/cocktails";
import useStyles from "./style";

const AddForm = ({ currentId, setCurrentId }) => {
  const [addCocktail, setAddCocktail] = useState({
    title: "",
    type_of_drink: "",
    glass: "",
    tags: "",
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
    ingredient9: "",
    ingredient10: "",
    preparation: "",
    selectedFiles: "",
  });

  const cocktail = useSelector((state) =>
    currentId ? state.cocktails.find((c) => c._id === currentId) : null
  );
  const dispatch = useDispatch();
  const styles = useStyles();

  useEffect(() => {
    if (cocktail) setAddCocktail(cocktail);
  }, [cocktail]);

  //here is we are checking when three dots are click editing shows up otherwise  show create
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateCocktail(currentId, addCocktail));
    } else {
      dispatch(createCocktails(addCocktail));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setAddCocktail({
      title: "",
      type_of_drink: "",
      glass: "",
      tags: "",
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      ingredient4: "",
      ingredient5: "",
      ingredient6: "",
      ingredient7: "",
      ingredient8: "",
      ingredient9: "",
      ingredient10: "",
      preparation: "",
      selectedFiles: "",
    });
  };

  return (
    <Paper className={styles.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${styles.root} ${styles.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a Cocktail
        </Typography>
        <TextField
          autoFocus
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={addCocktail.title}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, title: e.target.value })
          }
        />
        <TextField
          name="type_of_drink"
          variant="outlined"
          label="Type"
          fullWidth
          value={addCocktail.type_of_drink}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, type_of_drink: e.target.value })
          }
        />

        <TextField
          name="glass"
          variant="outlined"
          label="Glass Type"
          fullWidth
          value={addCocktail.glass}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, glass: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={addCocktail.tags}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, tags: e.target.value.split(",") })
          }
        />
        <TextField
          name="ingredient1"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient1}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient1: e.target.value })
          }
        />
        <TextField
          name="ingredient2"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient2}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient2: e.target.value })
          }
        />
        <TextField
          name="ingredient3"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient3}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient3: e.target.value })
          }
        />
        <TextField
          name="ingredient4"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient4}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient4: e.target.value })
          }
        />
        <TextField
          name="ingredient5"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient5}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient5: e.target.value })
          }
        />
        <TextField
          name="ingredient6"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient6}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient6: e.target.value })
          }
        />
        <TextField
          name="ingredient7"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient7}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient7: e.target.value })
          }
        />
        <TextField
          name="ingredient8"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient8}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient8: e.target.value })
          }
        />
        <TextField
          name="ingredient9"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient9}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient9: e.target.value })
          }
        />
        <TextField
          name="ingredient10"
          variant="outlined"
          label="Ingredient"
          fullWidth
          value={addCocktail.ingredient10}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, ingredient10: e.target.value })
          }
        />
        <TextField
          name="preparation"
          variant="outlined"
          label="Instructions"
          fullWidth
          value={addCocktail.preparation}
          onChange={(e) =>
            setAddCocktail({ ...addCocktail, preparation: e.target.value })
          }
        />
        <div className={styles.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setAddCocktail({ ...addCocktail, selectedFiles: base64 })
            }
          ></FileBase>
          <Button
            className={styles.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            {currentId ? "Update" : "Submit"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default AddForm;
