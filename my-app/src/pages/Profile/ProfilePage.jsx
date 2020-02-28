import React, { PropTypes } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { WithUserConsumer } from "../../contexts/HOC/withUserConsumer";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const ProfileArea = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn1.iconfinder.com/data/icons/business-users/512/circle-512.png"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            User Profile
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h4>Name : {props.name}</h4>
            <h4>Email : {props.email}</h4>
            <h4>Mobile : {props.mobile}</h4>
            <h4>Address : {props.address}</h4>
            <h4>Gender : {props.gender}</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WithUserConsumer(ProfileArea);
