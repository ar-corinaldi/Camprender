import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatBubbleTwoToneIcon from "@material-ui/icons/ChatBubbleTwoTone";
import Button from "@material-ui/core/Badge";
import Badge from "@material-ui/core/Badge";
import TextField from "@material-ui/core/TextField";
import Comment from "./Comment";
import ToastComponent from "./ToastComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "20px",
    float: "left",
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ATip = (props) => {
  const [showToast, setShowToast] = useState(false);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState(props.tip.likes);
  const [dioLike, setDioLike] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  /*
Constante para dar like. Todavia no terminado
*/
  const darLike = () => {
    if (!props.user) setShowToast(true);
    else {
      setShowToast(false);
      let tmpLikes = like;
      if( dioLike ) setLike(tmpLikes-1);
      else setLike(tmpLikes+1);
      setDioLike(!dioLike);
    }
  };

  let comments = null;
  let filteredTips = props.tip.comentarios;
  comments = (
    <div>
      {filteredTips.map((element) => {
        return (
          <div>
            <Comment comment={props.tip.comentarios}></Comment>
          </div>
        );
      })}
    </div>
  );
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              C
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.tip.titulo}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={props.tip.image}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.tip.descripcion}
            <br></br>
            Region:
            {props.tip.region}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <form>
            <TextField
              id="outlined-uncontrolled"
              label="Añade Comentario "
              variant="outlined"
              size="small"
            />
          </form>
          <Badge
            className="pointer"
            color="secondary"
            onClick={darLike}
            badgeContent={like}
            showZero
          >
            <FavoriteIcon />
          </Badge>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comentarios:</Typography>
            {comments}
          </CardContent>
        </Collapse>
      </Card>
      <p></p>
      <ToastComponent
        show={showToast}
        setShow={setShowToast}
        title="Login required"
        body="You must login to like the tip"
      />
    </div>
  );
};

export default ATip;