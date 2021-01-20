import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
const Cocktail = ({ cocktail, setCurrentId }) => {
  const dispatch = useDispatch();
  //styles pulling from styles.js file
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardMedia
        className={styles.media}
        image={cocktail.selectedFiles}
        title={cocktail.title}
      />
      <div>
        <Typography variant="h6">{cocktail.title}</Typography>
        <Typography variant="body2">
          {moment(cocktail.createdAt).fromNow()}
        </Typography>
      </div>

      <div className={styles.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(cocktail._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div>
        <Typography variant="body2" color="textSecondary">
          {cocktail.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <Typography variant="h5" gutterBottom>
        {cocktail.title}
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.type_of_drink}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.glass}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient1}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient2}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient3}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient4}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient5}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient6}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient7}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient8}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient9}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.ingredient10}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {cocktail.preparation}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(cocktail._id)}
        >
          <ThumbUpAltIcon fontSize="small" />
          {cocktail.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(cocktail._id)}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cocktail;
